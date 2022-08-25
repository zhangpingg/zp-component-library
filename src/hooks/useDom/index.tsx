// dom 大小改变时的回调，返回当前元素本身
import { useEffect, MutableRefObject } from 'react';

const useDom = (dom: MutableRefObject<any>, cb: (dom: Element) => void) => {
  const obsever = new ResizeObserver((entries) => {
    for (const entry of entries) {
      cb && cb(entry.target);
    }
  });

  useEffect(() => {
    if (dom?.current) {
      obsever.observe(dom.current);
    }
    return () => obsever.disconnect();
  }, [dom]);

  return null;
};

export default useDom;
