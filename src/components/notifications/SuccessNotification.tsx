import { toast, Toaster } from 'react-hot-toast';

export const SuccessNotification = (textMessage: string) => toast.success(textMessage, {
  style: {
    border: '1px solid green',
    padding: '20px',
    color: 'green',
  },
  duration: 3000,
  iconTheme: {
    primary: 'green',
    secondary: '#FFFAEE',
  },
}
);