import styles from "./Category.module.css"

interface Images {
  id: string;
  url: string;
  alt: string;
  text: string;
  component: () => JSX.Element;


}

interface ImagemMapProps {
  image: Images[];
  onClick: (clickedImage: Images) => void;
}
export default function Category(props: ImagemMapProps) {
  const { image, onClick } = props


  const handleClick = (clickedImage: Images) => {
    onClick(clickedImage);
  };
  return (
    <div className={styles.category} >


      {image ? image.map((img, index) => (
        <div key={index} className={styles.card} onClick={() => handleClick(img)} >
          <img src={img.url} alt={img.alt} />
          <p>{img.text}</p>
        </div>
      )) : []}
    </div>
  )
};
