export default function (QLD) {
    'use strict';

    /**
     * @module fileUploads
     */
    let datePickers = {};

    /**
     * Initialise any date picker components on the page
     *
     * @memberof module:datePickers
     */
    datePickers.init = () => {
        let $dateInputs = document.querySelectorAll('div.flatpickr > input[type=text].qld__text-input');

        // Loop through each date field and initialize flatpickr
        $dateInputs.forEach($input => {
            // Empty object to store the flatpickr settings
            let flatpickrSettings = {};
            // Data attributes
            const dataAttributes = $input.dataset;

            // Loop through each data attribute of the element
            for (let key in dataAttributes) {
                // Add the data attribute key and value to the object
                flatpickrSettings[key] = dataAttributes[key];
            }

            // Initialise flatpickr for the input
            initDatePicker($input, flatpickrSettings);
        });
    }


    const initDatePicker = ($input, settings) => {
        const wrapper = $input.parentElement;
        const toggleBtn = wrapper.querySelector('.calendar-toggle');
        // Default settings, all options here: https://flatpickr.js.org/options/
        const defaultSettings = {
            // Prevents the date picker from opening when the text input is clicked
            clickOpens: false,
            // Allow a user to manually enter a date into the text input
            allowInput: true,
            locale: {
                firstDayOfWeek: 1
            },
            // Wraps the elements inside the element with the .flatpickr class
            wrap: true
        }
        // Merge the settings from the text input data attributes with the defaultSettings object
        const allSettings = {...settings, ...defaultSettings};

        // Initialise flatpickr
        const fp = flatpickr(wrapper, allSettings);

        // Calendar toggle button
        $(toggleBtn).on("click", (e) => {
            fp.toggle();
        })
    }

    // Store fileUploads object globally
    QLD.datePickers = datePickers;

    document.addEventListener('DOMContentLoaded', function () {
        QLD.datePickers.init();
    });

}
