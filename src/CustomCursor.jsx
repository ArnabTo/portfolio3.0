import AnimatedCursor from "react-animated-cursor";
export default function CustomCursor(){
    return(
        <>
           <AnimatedCursor
      innerSize={30}
      outerSize={30}
      color='245,245,245'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
        </>
    )
}