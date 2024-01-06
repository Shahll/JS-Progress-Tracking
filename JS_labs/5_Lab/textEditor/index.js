const blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
  const editButton = block.querySelector(".edit-button");
  const deleteButton = block.querySelector(".delete-button");
  let text = block.querySelector("p");

  let isEditing = false;
  let textarea = null;

  editButton.addEventListener("click", () => {
    if (!isEditing) {
      isEditing = true;

      textarea = document.createElement("textarea");
      textarea.value = text.textContent;
      block.replaceChild(textarea, text);
      text = textarea;
      textarea.focus();

      textarea.addEventListener("blur", () => {
        const newContent = document.createElement("p");
        newContent.textContent = textarea.value;
        block.replaceChild(newContent, textarea);
        text = newContent;
        isEditing = false;
      });
    } else {
      const newContent = document.createElement("p");
      newContent.textContent = textarea.value;
      block.replaceChild(newContent, textarea);
      text = newContent;
      isEditing = false;
    }
  });

  deleteButton.addEventListener("click", () => {
    block.remove();
  });
});