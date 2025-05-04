const questionBlockContainer = document.querySelector(".questions-container");
const addButton = document.querySelector(".add-button");
const form = document.querySelector("form");

let questionCount = 1;

function createQuestionBlock() {
  const wrapper = document.createElement("div");
  wrapper.className = "question-block border border-gray-200 rounded-md p-4";
  wrapper.innerHTML = `
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-medium">Question</h3>
          <button
            type="button"
            class="delete-question text-red hover:text-red/80 rotate-45 text-3xl cursor-pointer"
          >+</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Question Label
            </label>
            <input
              type="text"
              placeholder="Enter question label"
              class="question-label-input w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan focus:border-transparent"
            />
          </div>
        </div>
        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            class="required-checkbox h-4 w-4 text-cyan focus:ring-cyan border-gray-300 rounded"
          />
          <label class="ml-2 block text-sm text-gray-700">
            Required field
          </label>
        </div>
      `;
  return wrapper;
}

addButton.addEventListener("click", () => {
  questionCount++;
  const newBlock = createQuestionBlock();
  questionBlockContainer.appendChild(newBlock);
});

questionBlockContainer.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete-question")) {
    const block = e.target.closest(".question-block");
    if (block) {
      block.remove();
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = [];
  const blocks = questionBlockContainer.querySelectorAll(".question-block");
  console.log(blocks);

  blocks.forEach((block) => {
    const labelInput = block.querySelector(".question-label-input");
    const requiredCheckbox = block.querySelector(".required-checkbox");

    result.push({
      label: labelInput.value.trim(),
      required: requiredCheckbox.checked,
    });
  });

  console.log(result);
});
