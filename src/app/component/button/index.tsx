import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: string
}

export const Button = ({
  children,
  onClick,
  disabled = false,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  function getButtonStyle(status: string) {
    switch (status) {
      case 'outline':
        return 'border border-primary bg-transparent text-white'
      case 'primary':
        return 'border border-primary disabled:bg-primary-light  disabled:border-primary-light bg-primary text-white'
      case 'blue':
        return 'border border-blue-600 text-white bg-blue-dark-600'
      case 'success':
        return 'border bg-success-500 border-success-500 text-sm  px-4 py-2.5 text-white disabled:bg-success-200 disabled:border-success-200'
      default:
        return 'border border-primary disabled:bg-primary-light  disabled:border-primary-light bg-primary text-white'
    }
  }

  const style = getButtonStyle(variant)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'flex items-center justify-center gap-x-1.5 rounded-full font-semibold',
        style,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
