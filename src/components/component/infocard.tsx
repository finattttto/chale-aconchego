export function InfoCard({ imgSrc, imgAlt, title, description, detail = "" }) {
    return (
<div className="rounded-lg overflow-hidden group">
  <img
    src={imgSrc}
    alt={imgAlt}
    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
    style={{ aspectRatio: "600/400", objectFit: "cover" }}
  />
  <div className="bg-background p-4">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
    <p className="text-muted-foreground text-[12px] pt-1">{detail}</p>
  </div>
</div>
    );
}

export default InfoCard;
