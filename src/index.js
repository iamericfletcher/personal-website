const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const linkedinLightIcon = document.getElementById('linkedin-light-icon');
const linkedinDarkIcon = document.getElementById('linkedin-dark-icon');
const githubLightIcon = document.getElementById('github-light-icon');
const githubDarkIcon = document.getElementById('github-dark-icon');
const substackLightIcon = document.getElementById('substack-light-icon');
const substackDarkIcon = document.getElementById('substack-dark-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    linkedinDarkIcon.classList.remove('hidden');
    githubDarkIcon.classList.remove('hidden');
    substackDarkIcon.classList.remove('hidden');

} else {
    themeToggleDarkIcon.classList.remove('hidden');
    linkedinLightIcon.classList.remove('hidden');
    githubLightIcon.classList.remove('hidden');
    substackLightIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    linkedinLightIcon.classList.toggle('hidden');
    linkedinDarkIcon.classList.toggle('hidden');
    githubLightIcon.classList.toggle('hidden');
    githubDarkIcon.classList.toggle('hidden');
    substackLightIcon.classList.toggle('hidden');
    substackDarkIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});



