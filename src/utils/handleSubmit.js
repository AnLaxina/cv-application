/**
 * Submits the form and moves on to the next section
 * @param event - is for gathering the actual form itself and retrieving its inputs
 * @param submitMethod - is for the component's prop and the parent does the work
 * @param moveMethod - is for the component's prop and the parent does the work
 * @param objectType - is for determining where the data will go.
 */

export default function handleSubmit(event, submitMethod, moveMethod, objectType) {
    event.preventDefault();
    const formData = new FormData(event.target);
    submitMethod(formData, objectType);
    moveMethod();
}