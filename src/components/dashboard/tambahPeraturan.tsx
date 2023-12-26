'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '../ui/use-toast';

const formSchema = z.object({
  namaPeraturan: z.string(),
  kategori: z.enum(['LLAJ', 'Perkeretaapian']),
  jenisPeraturan: z.enum(['Undang-Undang', 'Peraturan Presiden', 'Peraturan Pemerintah', 'Peraturan Menteri']),
  link: z.string().url(),
}).refine((data) => {
  if (data.kategori) {
    return true;
  }
}, {
  message: 'Pilih kategori terlebih dahulu',
  path: ['kategori'],
}).refine((data) => {
  if (data.jenisPeraturan) {
    return true;
  }
}, {
  message: 'Pilih jenis peraturan terlebih dahulu',
  path: ['jenisPeraturan'],
});
export default function TambahPeraturan() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaPeraturan: '',
      link: '',
    },
  });
  // const jenisPeraturan = form.watch('jenisPeraturan');
  // const kategori = form.watch('kategori');
  const handleSubmit = (/* values: z.infer<typeof formSchema> */) => {
    // console.log({ values });
    toast({
      description: 'Anda telah menambah peraturan',
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md w-full flex flex-col gap-4">
          <FormField
            control={form.control}
            name="namaPeraturan"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Nama Peraturan</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Peraturan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="jenisPeraturan"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Jenis Peraturan</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Jenis Peraturan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Undang-Undang">Undang-Undang</SelectItem>
                      <SelectItem value="Peraturan Presiden">Peraturan Presiden</SelectItem>
                      <SelectItem value="Peraturan Pemerintah">Peraturan Pemerintah</SelectItem>
                      <SelectItem value="Peraturan Menteri">Peraturan Menteri</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="kategori"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Kategori</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Kategori Peraturan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="LLAJ">LLAJ</SelectItem>
                      <SelectItem value="Perkeretaapian">Perkeretaapian</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Link Peraturan</FormLabel>
                  <FormControl>
                    <Input placeholder="Link Peraturan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>

  );
}
