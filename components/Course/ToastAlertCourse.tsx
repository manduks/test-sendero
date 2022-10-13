import * as ToastPrimitive from '@radix-ui/react-toast';

import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';

import { XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

type ToastAlertCourseProps = {
  variant: 'error' | 'success' | 'alert';
  message: string;
};

const rootStyles = classNames(
  'bg-slate-50 flex items-center w-[350px] h-[56px] right-5 mr-6 reduce-motion'
);
const viewportStyles = classNames(
  'fixed bottom-0 right-0 flex flex-col p-[25px] gap-[10p] max-w-[100vw] m-0 list-none z-50 outline-none'
);

const ToastAlertCourse = (props: ToastAlertCourseProps) => {
  const { variant, message } = props;
  const [open, setOpen] = useState(false);
  const timerRef = useRef<typeof setTimeout | any>(0);

  useEffect(() => {
    setOpen(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        style={{
          gridTemplateAreas: '"title action" "description action"',
          gridTemplateColumns: 'auto max-content',
        }}
        className={rootStyles}
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex h-full pl-4 items-center relative w-full bg-vainilla">
          {variant == 'error' && (
            <XCircleIcon className="w-6 h-6 text-negro mr-5" />
          )}
          {variant == 'alert' && (
            <ExclamationIcon className="w-6 h-6 text-negro mr-5" />
          )}
          {variant == 'success' && (
            <CheckCircleIcon className="w-6 h-6 text-negro mr-5" />
          )}
          <h1 className="font-IBM-Plex-Sans font-normal text-base">
            {message}
          </h1>
          <button
            className="w-4 absolute right-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            <XIcon />
          </button>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className={viewportStyles} />
    </ToastPrimitive.Provider>
  );
};

export default ToastAlertCourse;
