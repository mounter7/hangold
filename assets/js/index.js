let $title = '22 - Home';

const section_0 = `
    <div class="content">
        <h1>Almost there!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quidem maiores, provident voluptas voluptatum laboriosam dicta beatae iure quos, culpa molestiae, nulla laudantium voluptate quo labore placeat! Dignissimos, vitae!</p>
        <a href="#" class="btn-00">Get Started</a>
    </div>

    <div class="img">
        <img src="./assets/images/toon-00.png" class="img-00" alt="image">
    </div>
`;

const section_1 = `
    <div class="item-00">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex fugit exercitationem sunt assumenda. Excepturi error necessitatibus accusantium eius impedit labore eos unde nam, eligendi, similique voluptatibus consectetur quia consequuntur?</p>
    </div>

    <div class="item-00">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex fugit exercitationem sunt assumenda. Excepturi error necessitatibus accusantium eius impedit labore eos unde nam, eligendi, similique voluptatibus consectetur quia consequuntur?</p>
    </div>

    <div class="item-00">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex fugit exercitationem sunt assumenda. Excepturi error necessitatibus accusantium eius impedit labore eos unde nam, eligendi, similique voluptatibus consectetur quia consequuntur?</p>
    </div>
`;

const section_2 = `
    <h2>This is a heading</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quidem maiores, provident voluptas voluptatum laboriosam dicta beatae iure quos, culpa molestiae, nulla laudantium voluptate quo labore placeat! Dignissimos, vitae!</p>
    <a href="#" class="btn-01">Learn More</a>
`;

const section_3 = `
    <div class="img">
        <img src="./assets/images/toon-2.png" class="img-00" alt="image">
    </div>

    <div class="content">
        <h2>This is a heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quidem maiores, provident voluptas voluptatum laboriosam dicta beatae iure quos, culpa molestiae, nulla laudantium voluptate quo labore placeat! Dignissimos, vitae!</p>
        <a href="#" class="btn-01">Learn More</a>
    </div>
`;

const section_4 = `
    <div class="content">
        <h2>This is a heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quidem maiores, provident voluptas voluptatum laboriosam dicta beatae iure quos, culpa molestiae, nulla laudantium voluptate quo labore placeat! Dignissimos, vitae!</p>
        <a href="#" class="btn-01">Learn More</a>
    </div>
    
    <div class="img">
        <img src="./assets/images/toon-1.png" class="img-00" alt="image">
    </div>
`;

const section_5 = `

`;

let title = document.querySelector('title');
let show_section_0 = document.querySelector('#section-00 .container');
let show_section_1 = document.querySelector('#section-01 .container');
let show_section_2 = document.querySelector('#section-02 .container');
let show_section_3 = document.querySelector('#section-03 .container');
let show_section_4 = document.querySelector('#section-04 .container');
let show_section_5 = document.querySelector('#section-05 .container');

title.innerHTML = $title;
show_section_0.innerHTML = section_0;
show_section_1.innerHTML = section_1;
show_section_2.innerHTML = section_2;
show_section_3.innerHTML = section_3;
show_section_4.innerHTML = section_4;
//show_section_5.innerHTML = section_5;