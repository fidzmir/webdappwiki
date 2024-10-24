// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the main content element where the new content will be injected
    const mainContent = document.getElementById('main-content');  // Corrected ID

    // Add event listeners to each panel box
    document.getElementById('panel1').addEventListener('click', function() {
        updateMainContent(
            'Equipment',
            `
            <div class="scroll-container">
                <a href="C:/Users/ghost/demo_app_webd/respitory/sword/sword.html" target="_blank">
                    <img class="maincontentimg" src="assets/sword.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">SWORD</div>
                </a>
                <a href="armorlist.html" target="_blank">
                    <img class="maincontentimg" src="assets/armor.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">ARMOR</div>
                </a>
                <a href="armorlist.html" target="_blank">
                    <img class="maincontentimg" src="assets/bow.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">BOW</div>
                </a>
                <a href="armorlist.html" target="_blank">
                    <img class="maincontentimg" src="assets/staff.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">STAFF</div>
                </a>
                <a href="armorlist.html" target="_blank">
                    <img class="maincontentimg" src="assets/boots.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">BOOTS</div>
                </a>
                <a href="armorlist.html" target="_blank">
                    <img class="maincontentimg" src="assets/pendant.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">PENDANT</div>
                </a>
                <a href="armorlist.html" target="_blank">
                    <img class="maincontentimg" src="assets/ring.png" alt="Armor 1" style="width: 200px; height: auto;">
                    <div class="image-name">RING</div>
                </a>
            </div>
            `
        );
    });
    

    document.getElementById('panel2').addEventListener('click', function() {
        updateMainContent(
            'Accessories',
            `
            <a href="accessorieslist.html">
                <img class="maincontentimg" src="assets/2.jpg" alt="Accessory 1" style="width: 200px; height: auto;">
            </a>
            <a href="accessorieslist.html">
                <img class="maincontentimg" src="assets/accessory_image2.png" alt="Accessory 2" style="width: 200px; height: auto;">
            </a>
            `
        );
    });

    document.getElementById('panel3').addEventListener('click', function() {
        updateMainContent(
            'Potions',
            `
            <a href="potionslist.html">
                <img class="maincontentimg" src="assets/potion_image1.png" alt="Potion 1" style="width: 200px; height: auto;">
            </a>
            <a href="potionslist.html">
                <img class="maincontentimg" src="assets/potion_image2.png" alt="Potion 2" style="width: 200px; height: auto;">
            </a>
            `
        );
    });

    document.getElementById('panel4').addEventListener('click', function() {
        updateMainContent(
            'Miscellaneous',
            `
            <a href="miscellaneouslist.html">
                <img class="maincontentimg" src="assets/misc_image1.png" alt="Misc 1" style="width: 200px; height: auto;">
            </a>
            <a href="miscellaneouslist.html">
                <img class="maincontentimg" src="assets/misc_image2.png" alt="Misc 2" style="width: 200px; height: auto;">
            </a>
            `
        );
    });

    // Function to update the main content
    function updateMainContent(title, content) {
        // Update the main content area
        mainContent.innerHTML = `<h2>${title}</h2><div>${content}</div>`;
    }
       // Function to update the main content with sliding effect
    function updateMainContent(title, content) {
        mainContent.innerHTML = `<h2>${title}</h2><div>${content}</div>`;
        
        // Wait for content to be added to the DOM, then apply sliding effect
        setTimeout(() => {
            const images = document.querySelectorAll('.maincontentimg');
            images.forEach((img) => {
                img.classList.add('slide-in'); // Apply slide-in effect
            });
        }, 100); // Delay ensures that the images are added to DOM before the effect
    }
});
