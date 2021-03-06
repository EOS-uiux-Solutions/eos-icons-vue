import { TemplateProps } from '../interface/index'
import iconData from '../config/iconConfig.json'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
import { IconProps, valuesMap } from '../helper';
import { flipFunction } from '../flipFunction';

const EOS_${fileName} = ({size = "${iconData.iconDefault.size}", color = "${iconData.iconDefault.color}", rotate = ${iconData.iconDefault.rotate}, horizontalFlip = ${iconData.iconDefault.horizontalFlip}, verticalFlip = ${iconData.iconDefault.verticalFlip}}: IconProps) => {
  const sizeString: string = size.toString()
    if(Object.keys(valuesMap).includes(sizeString)) {
        size = valuesMap[size]
    }
  const { scaleX, scaleY, translateX, translateY } = flipFunction({horizontalFlip,verticalFlip})
  return (
    ${data}
  );
};

export default EOS_${fileName}
`
  return (render)
}

export default componentTemplate
