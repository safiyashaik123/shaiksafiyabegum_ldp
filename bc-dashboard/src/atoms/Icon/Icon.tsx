import { SvgIconProps } from "@mui/material/SvgIcon";

export interface IconProps extends SvgIconProps {
  icon: React.ElementType;
}

const Icon = ({ icon: IconComponent, ...props }: IconProps) => {
  return <IconComponent {...props} />;
};

export default Icon;