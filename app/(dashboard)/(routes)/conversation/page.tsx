'use client';

import * as z from 'zod';
import Heading from '@/components/heading';
import { useForm } from 'react-hook-form';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { cn } from '@/lib/utils';
import { BotAvatar } from '@/components/bot-avatar';
import { UserAvatar } from '@/components/user-avatar';
import { conversationDetails } from '@/app/routes';
import { MessageSquareOff } from 'lucide-react';
import { useProModal } from '@/hooks/use-pro-model';
import toast from 'react-hot-toast';

const ConversationPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = {
        role: 'user',
        content: values.prompt,
      };

      const response = await fetch('/api/conversation', {
        body: JSON.stringify({ message: values.prompt }),
        method: 'POST',
      });

      if(response.status === 403) {
        proModal.onOpen();
      }

      const data = await response.json();

      setMessages((current) => [
        ...current,
        userMessage,
        { role: 'model', content: data },
      ]);
      form.reset();
    } catch (error: any) {
      console.log(error)
      toast.error('Failed to generate response');
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title={conversationDetails.label}
        description={conversationDetails.description}
        icon={conversationDetails.icon}
        iconColor={conversationDetails.color}
        bgColor={conversationDetails.bgColor}
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-0 focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='How calculate the radius of circle?'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg 2-full flex items-center justify-center bg-muted'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty icon={MessageSquareOff} label='No conversation started' />
          )}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message, id) => {
              return (
                <div
                  key={id}
                  className={cn(
                    'p-8 w-full flex items-start gap-x-8 rounded-lg',
                    message.role === 'user'
                      ? 'bg-white border border-black/10'
                      : 'bg-muted'
                  )}
                >
                  {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                  <p className='text-sm'>{message.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
