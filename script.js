document.getElementById('sbiButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;

    // name validation
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name';
        document.getElementById('mobileError').textContent = '';
        return;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // number validation
    if (mobile.trim() === '' || mobile.length !== 10) {
        document.getElementById('mobileError').textContent = 'Please enter a valid mobile number';
        return;
    } else {
        document.getElementById('mobileError').textContent = '';
    }

    // Redirect to SBI Life Plans page
    window.location.href = 'https://www.sbilife.co.in/en/individual-life-insurance/online-plans';
});

