const rates = {
    'high_school': {'15_days': 9.95, '11_14_days': 10.95, '9_10_days': 11.25, '5_6_days': 13.35, '3_days': 16.75, '1_day': 21.85},
    'college_fre': {'15_days': 12.4, '11_14_days': 13.39, '9_10_days': 13.7, '5_6_days': 15.8, '3_days': 19.2, '1_day': 24.3},
    'college_sof': {'15_days': 13.82, '11_14_days': 14.82, '9_10_days': 15.12, '5_6_days': 17.22, '3_days': 20.62, '1_day': 25.72},
    'college_jun': {'15_days': 14.93, '11_14_days': 15.92, '9_10_days': 16.23, '5_6_days': 18.33, '3_days': 21.73, '1_day': 26.83},
    'college_sen': {'15_days': 16.48, '11_14_days': 17.47, '9_10_days': 17.78, '5_6_days': 19.88, '3_days': 23.28, '1_day': 28.38},
    'masters': {'15_days': 21.49, '11_14_days': 22.49, '9_10_days': 22.79, '5_6_days': 24.89, '3_days': 28.29, '1_day': 33.39},
    'phd': {'15_days': 24.32, '11_14_days': 25.32, '9_10_days': 25.62, '5_6_days': 27.72, '3_days': 31.12, '1_day': 36.22},
    'business_std': {'15_days': 16.19, '11_14_days': 17.18, '9_10_days': 17.49, '5_6_days': 19.59, '3_days': 22.99, '1_day': 28.09},
    'business_pre': {'15_days': 22.86, '11_14_days': 23.85, '9_10_days': 24.16, '5_6_days': 26.26, '3_days': 29.66, '1_day': 34.76}
};

function calculateCost() {
    const levelElement = document.querySelector('.calculator__selected-item[data-selected-type="academicLevel"]');
    const deadlineElement = document.querySelector('.calculator__selected-item[data-selected-type="urgency"]');

    if (!levelElement || !deadlineElement) {
        console.error('Level or deadline element not found');
        return;
    }

    const level = levelElement.getAttribute('value');
    const deadline = deadlineElement.getAttribute('value');

    if (!deadline) {
        console.error('Deadline value is not found');
        return;
    }

    const formattedDeadline = deadline.replace(/\s+/g, '_');
    const pages = parseInt(document.querySelector('#pages').textContent, 10);

    if (!rates[level]) {
        console.error(`Rates for level "${level}" not found`);
        return;
    }

    const rate = rates[level][formattedDeadline];

    if (!rate) {
        console.error(`Rate for deadline "${formattedDeadline}" not found`);
        return;
    }

    const total = (rate * pages).toFixed(2);

    document.querySelector('#total_cost').innerText = `$${total}`;
    updateWordCount(pages);

    const pagess = document.querySelector(".pagess");
    if (pages > 1) {
        pagess.style.display = "inline-block";
    } else {
        pagess.style.display = "none";
    }
}

function updateWordCount(pages) {
    const words = pages * 275;
    document.querySelector('#word_count').innerText = ` (${words} words)`;
}

function modifyPageCount(change, event) {
    event.preventDefault();
    event.stopPropagation();

    const pagesSpan = document.querySelector('#pages');

    let currentPageCount = parseInt(pagesSpan.textContent, 10);
    currentPageCount += change;

    if (currentPageCount < 1) {
        currentPageCount = 1;
    } else if (currentPageCount > 300) {
        currentPageCount = 300;
    }

    pagesSpan.textContent = currentPageCount;
    calculateCost();
}

function customSelect() {
    const customSelects = document.querySelectorAll(".calculator__custom-select");

    customSelects.forEach((select) => {
        const selectedItem = select.querySelector(".calculator__selected-item");
        const dropdown = select.querySelector(".calculator__dropdown");
        const options = dropdown.querySelectorAll(".calculator__option");

        selectedItem.addEventListener("click", () => {
            dropdown.classList.toggle("is-open");
        });

        options.forEach((option) => {
            option.addEventListener("click", () => {
                selectedItem.textContent = option.textContent;
                selectedItem.setAttribute('value', option.getAttribute('value'));
                dropdown.classList.remove("is-open");
                calculateCost();
            });
        });

        document.addEventListener("click", (e) => {
            if (!select.contains(e.target)) {
                dropdown.classList.remove("is-open");
            }
        });
    });
}

export {customSelect, calculateCost, modifyPageCount};