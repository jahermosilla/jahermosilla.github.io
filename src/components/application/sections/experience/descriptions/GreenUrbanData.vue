<template>
    <div>
        This was a small startup where I was the only one developing the products.
        I worked in two different products.
        <ul class="list-circle list-inside ml-4">
            <li>
                <FeaturedText
                    text="Healthy Routes"
                    is="a"
                    href="https://greenurbandata.com/en/healthy-routes/"
                    target="__blank"
                />
                <!-- -->
                A Progresive Web Application that shows alternative routes based on environmental indicators such as:
                <FeaturedText text="Polution" />,
                <FeaturedText text="Shadows" />,
                <FeaturedText text="Noise" />,
                <FeaturedText text="Green infrastructure" />, ...
                <br />
                <!-- -->
                Some of the technologies used in this application where PostgreSQL, PgRouting, NodeJS, Express, Sequelize, Open Street Maps, Satelital Imagery, Image processing (Calculate environmental indexes) ...
            </li>
            <li>
                <FeaturedText
                    text="Temperature regulator"
                    is="a"
                    href="https://greenurbandata.com/en/saas-temperature-regulator/"
                    target="__blank"
                />
                <!-- -->

                A Progresive Web Application that shows environmental indexes represented in a map with temporal controls.
            </li>
        </ul>
    </div>
</template>