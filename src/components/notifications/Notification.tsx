import { toast } from 'react-hot-toast'

 export const Notification = (textMessage: string) => toast(textMessage, {
   style: {
     border: '1px solid #825afd',
     padding: '20px',
     color: '#825afd',
   },
   duration: 3000,
   iconTheme: {
     primary: '#825afd',
     secondary: '#FFFAEE',
   },
 }
);