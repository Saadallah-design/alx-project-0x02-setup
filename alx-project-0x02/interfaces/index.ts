
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

