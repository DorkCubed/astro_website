import './picture.css';

interface PictureProps {
  img_name: string
}

function Picture(props: PictureProps) {

  const src1 = "https://raw.githubusercontent.com/DorkCubed/astro_gallery/main/" + props.img_name
  return (
    <div className='picture-container'>
      <div className='tilt' >
        <div className="picture">
          <img
            width="100%"
            loading="lazy"
            src={
              src1
            }
            onClick={() => window.open(src1, "_blank")}
            alt="Astro Gallery" />
        </div>
      </div>
    </div >
  );
}
export default Picture;