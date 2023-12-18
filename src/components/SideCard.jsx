import styles from "./SideCard.module.css"

// eslint-disable-next-line react/prop-types
function SideCard({ data: {image, title} }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default SideCard
