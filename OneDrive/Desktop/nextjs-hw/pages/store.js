import SearchBar from "../components/SearchBar";

export default function Store() {
  return (
    <>
      <div className="{styles.fakestore">
        <h1>Fake Store</h1>
        <p>Welcome to the Fake Store!</p>
        <SearchBar />
      </div>
    </>
  );
}
