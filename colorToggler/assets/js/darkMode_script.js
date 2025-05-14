  const btnDarkMode = document.getElementById('btn-dark-mode');

   
    const themeSystem = localStorage.getItem('themeSystem') || 'light';

    
    btnDarkMode.addEventListener('click', () => {
        
        let oldTheme = localStorage.getItem('themeSystem') || 'light';

        let newTheme = oldTheme === "light" ? "dark" : "light";

        localStorage.setItem('themeSystem', newTheme);

        defineCurrentTheme(newTheme);
    });

    function defineCurrentTheme(theme) {
       
        const darkIcon = '<span class="material-symbols-rounded">light_mode</span>';

        const lightIcon = '<span class="material-symbols-rounded">dark_mode</span>';

        document.documentElement.setAttribute("data-theme", theme);

        if (theme === "light") {
            
            btnDarkMode.innerHTML = darkIcon;
            return; 
        }
        btnDarkMode.innerHTML = lightIcon;
    }

    defineCurrentTheme(themeSystem);