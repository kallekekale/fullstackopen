const Filter = ({ newSearch, setNewSearch }) => {
  return (
    <div>
      search:{" "}
      <input
        value={newSearch}
        onChange={(event) => setNewSearch(event.target.value)}
      />
    </div>
  );
};

export default Filter;
