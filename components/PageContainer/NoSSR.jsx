
import dynamic from 'next/dynamic'

function NoSSR () {
  const HorizontalNav = dynamic(() => import('badenweiler-ui'), {
    ssr: false
  })

  const headerprops = {
    title: 'the title',
    buttonLeft: <button> Main </button>,
    buttonRightOne: <button> Tutorials </button>,
    buttonRightTwo: <button> Reviews </button>,
    styles: {backgroundColor: 'blue'}
  };

  return <HorizontalNav {...headerprops} />
}


export default NoSSR;

