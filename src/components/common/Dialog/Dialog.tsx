import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import classes from './Dialog.module.scss';

export const Dialog: React.FC<{
  open: boolean;
  onOpenChange: () => void;
}> = ({ open = false, onOpenChange }) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={classes.overlay} />
      <DialogPrimitive.Content className={classes.content}>
        <DialogPrimitive.Title className={classes.title}>
          Success! We got your information.
        </DialogPrimitive.Title>
        <DialogPrimitive.Description className={classes.description}>
          Paradise Events Planner will contact you ASAP
        </DialogPrimitive.Description>
        <DialogPrimitive.Close asChild>
          <div className={classes.iconButton}>
            <Cross2Icon />
          </div>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
