document.addEventListener("DOMContentLoaded", function (event) {
  const mainForm = document.querySelector("#main-form");

  const populatePage = () => {
    mainForm.innerHTML = `
        <label id="zip-code-title">Zip Code</label>
        <input type="text" id="zip-code-text" placeholder="Enter Zipcode Here">
        <label id="country-title">Country</label>
        <input type="text" id="country-text" value="US">
        <small>Delete the default US code and replace it with your counties code. </small><small>Use a countries 2 Letter Code. Example: United States = US</small>
        <input type="submit" value="Submit">
      `;
  };

  populatePage();
});
