import React from "react"

interface IButtonProps {
  text: string
  onClick: () => void
}

const Button = ({ text = "버튼", onClick }: IButtonProps) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
