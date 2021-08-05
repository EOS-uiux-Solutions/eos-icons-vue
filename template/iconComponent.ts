import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
const EOS_${fileName} = () => {
  return ${data}
};

export default EOS_${fileName}
`
  return (render)
}

export default componentTemplate
