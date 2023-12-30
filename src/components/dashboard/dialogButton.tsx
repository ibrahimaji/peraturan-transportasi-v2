import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TambahPeraturan from './tambahPeraturan';

export const closeButton = () => {
  document.getElementById("closeButton")?.click();
}

export const DialogButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah Peraturan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-full">
        <DialogHeader>
          <DialogTitle>Tambah Peraturan</DialogTitle>
          <DialogDescription>
            Tambahkan peraturan transportasi lainnya dengan mengisi form dibawah.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <TambahPeraturan />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button id="closeButton" type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
