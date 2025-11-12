
export interface CardProps {
  title: string;
  content: string;
}



type ButtonSize = 'small' | 'medium' | 'large';
type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
    size: ButtonSize;
    shape: ButtonShape;
}


export interface PostProps {
    title: string;
    content: string;
    userId: number;
    id: number;
}

export interface addressProps {
    street: string;
    city: string;
}

export interface UserProps {
    name: string;
    email: string;
    address: addressProps;
    id: number;
}