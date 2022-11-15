const storage = {
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => {
    const initialValues = JSON.parse(localStorage.getItem(key));
    if (initialValues) {
      localStorage.removeItem(key);
      initialValues.push(value);
      localStorage.setItem(key, JSON.stringify(initialValues));
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
    }
    window.dispatchEvent(new Event("storage"));
  },
  remove: (key, value) => {
    const values = JSON.parse(localStorage.getItem(key)).filter(
      (skill) => skill !== value
    );
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(values));
    window.dispatchEvent(new Event("storage"));
  },
};
export default storage;
