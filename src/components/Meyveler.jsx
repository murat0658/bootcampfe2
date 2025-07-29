import Meyve from "./Meyve";

export default function Meyveler({ tumMeyveler, handleDelete }) {
  const meyveler = tumMeyveler.filter((item) => !item.gizli);

  return (
    <ol className="liste">
      {meyveler.map((item) => (
        <Meyve meyve={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </ol>
  );
}
