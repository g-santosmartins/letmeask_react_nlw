import { toast } from 'react-hot-toast';

export const ErrorNotification = (textMessage: string) => toast.error(textMessage, {
  style: {
    border: '1px solid #8B0000',
    padding: '20px',
    color: '#8B0000',
  },
  duration: 3000,
  iconTheme: {
    primary: '#8B0000',
    secondary: '#FFFAEE',
  },
  }
);



