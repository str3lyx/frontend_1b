import React from "react"

interface IMaterialIcon {
  name: string,
  className?: string,
  style?: React.CSSProperties
}

const MaterialIcon: React.FC<IMaterialIcon> = (props) => {
  return (
    <span
      className={`material-symbols-rounded ${props.className}`}
      style={props.style}
    >
      {props.name}
    </span>
  )
}

MaterialIcon.defaultProps = {
  className: '',
  style: {}
}

export default MaterialIcon