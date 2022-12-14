
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# ApplicationRecord.transaction do 
    require 'open-uri'
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Restaurant.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')

    puts "Creating users..."
#     # Create one user with an easy to remember username, email, and password:
    User.create!(
        first_name: 'Demo', 
        last_name: 'User',
        email: 'demo@user.io', 
        phone_number: '0000000000'
    )

    RESTAURANTS = [
        {
            name: 'STK - NYC - Midtown',
            address: '1114 6th Ave, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(646) 624-2455',
            open_time: '11am',
            close_time: '12am',
            avg_rating: 4.0,
            cuisine: 'American', 
            description: "STK artfully blends two concepts into one—the modern steakhouse and a chic lounge. A large central lounge area is furnished with creamy leather banquettes and textured crocodile tiles, and is surrounded by an elevated dining room for more formal dining. Theatrical lights illuminate each table, while a DJ creates an energetic vibe throughout the entire space. STK Midtown is located in Midtown Manhattan, just steps from the bustling Theatre District. STK Midtown includes an outdoor patio and separate bar during summer months. As anticipated, steak is the main attraction. With a chic and modern mindset, STK offers small, medium and large cuts of meat, as well as naturally raised options and market fresh fish entrees. Aside from steak, signature items include Parmesan Truffle Fries; Lil’ BRGs; Crispy Lobster Tail; Sweet Corn Pudding; and Jumbo Lump Crab Salad.

            STK follows all local guides for Health and Safety procedures.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/47150903.jpg',
            fileName: '47150903.jpg',
            num_reviews: 7342
       },
        {
            name: 'PHD Terrace - Dream Midtown',
            address: '210 W 55th St, New York, NY 10019',
            price_range: '$30 and under',
            phone_number: '(646) 905-3660',
            open_time: '5pm',
            close_time: '2am',
            avg_rating: 4.5,
            cuisine: 'American', 
            description: "** PLEASE READ **
            *For immediate reservations assistance please email nyphdterracersvp@taogroup.com
            *Due to limited availability we cannot guarantee preferred indoor/outdoor seating in advance. We do our best to accommodate all requests based on availability.
            *Please have a physical ID. Copies are NOT accepted. We are 21+ venue.
            
            Located in the heart of NYC at the top of Dream Hotel Midtown, PHD Terrace is an all-season rooftop oasis perfect for after-work drinks, weekend revelry and private events.
            
            Enjoy the intimate, indoor atmosphere of the lower level, or head outside to the upper level to enjoy an evening on the Terrace providing breathtaking views of Manhattan & Times Square, the ultimate temporary escape from the hustle of Midtown Manhattan.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/50361353.png',
            fileName: '50361353.png',
            num_reviews: 627
        },
        {
            name: 'Tick Tock Diner NY',
            address: '481 8th Ave, New York, NY 10001',
            price_range: '$30 and under',
            phone_number: '(212) 268-8444',
            open_time: '6am',
            close_time: '10pm',
            avg_rating: 4.0,
            description: "Tick Tock Diner, an iconic symbol of the American diner with locations in both Midtown Manhattan and Clifton, New Jersey, has mastered the art of casual dining, providing customers with high quality ingredients, generous portions at a reasonable price and a comfortable, family-friendly atmosphere that keeps them coming back year after year.
            The 280 seat Midtown Manhattan location opened in 1997 at 481 8th Avenue (corner of 34th Street), across the street from Penn Station. Tick Tock Diner has long been known for its American comfort food. Today, it remains true to tradition while offering more dining choices than ever before on its extensive menu, accented with Italian, Greek and Tex-Mex influences. Keeping in the diner tradition, breakfast is served all day, featuring more than a dozen omelets, farm fresh eggs any style, pancakes, Belgian waffles and French toast.",
            cuisine: 'American', 
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/41722428.jpg',
            fileName: '41722428.jpg',
            num_reviews: 376
        },
        {
            name: 'The Smith - Nomad',
            address: '1115 6th Ave, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(212) 685-4500',
            open_time: '11:30am',
            close_time: '10pm',
            avg_rating: 4.5,
            cuisine: 'American', 
            description: "The Smith is a casual American brasserie with four upbeat locations in New York City: The Smith East Village, The Smith Midtown, The Smith Lincoln Square, and The Smith NoMad, as well as locations in DC and Chicago. We care about every meal and every moment. The menu features bistro classics, seasonal fare, and craft cocktails. Walk in the door and you’re in for a great time. Whether it’s date night, drinks on the town, a big birthday bash, a working lunch, a boozy brunch, or an I-don’t-want-to-cook-tonight night, we’ve got you covered.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24986966.jpg',
            fileName: '24986966.jpg',
            num_reviews: 4678
        },
        {
            name: 'Quality Bistro',
            address: '120 W 55th St, New York, NY 10019',
            price_range: '$31 to $50',
            phone_number: '(212) 433-3330',
            open_time: '11:30am',
            close_time: '11pm',
            avg_rating: 4.5,
            cuisine: 'American', 
            description: "Quality Bistro, a bustling, steak-centric brasserie in midtown Manhattan, offers contemporary takes on bistro classics in a whimsical space. Quality Bistro has the best French Onion Soup and Steak Frites in New York City. Located in Midtown Manhattan near Central Park, MOMA, Carnegie Hall, Rockefeller Center, Radio City Music Hall, and Times Square, Quality Bistro is the best restaurant in Midtown Manhattan.

            Quality Bistro has the best steak, french onion soup, salads, chicken, french fries, and desserts in Midtown Manhattan in New York.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/41736536.jpg',
            fileName: '41736536.jpg',
            num_reviews: 1602
        },
        {
            name: "Frankie and Johnnie's Steakhouse - 46th Street",
            address: '320 W 46th St, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(212) 997-9494',
            open_time: '4pm',
            close_time: '11pm',
            cuisine: 'American',
            avg_rating: 4.5,
            cuisine: 'American', 
            description: "Frankie & Johnnie’s Steakhouse, 46th Street, is offering indoor & outdoor seating, and Dinner Menu for Take Out.
            Available from 4.30 PM - 10.30 30PM from Wednesday to Saturday & 3.30 PM - 9.30 PM Sunday.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/48121962.jpg',
            fileName: '48121962.jpg',
            num_reviews: 1270
        },
        {
            name: "Carmine's - 44th Street - NYC",
            address: '200 W 44th St, New York, NY 10036',
            price_range: '$30 and under',
            phone_number: '(212) 221-3800',
            open_time: '11:30am',
            close_time: '11pm',
            avg_rating: 4.5,
            cuisine: 'Italian', 
            description: "Carmine's is a family style restaurant offering exceptional value to its guests through the many dishes of Southern Italian cuisine. Restaurateur Artie Cutler crafted Carmine's with a singular vision; bringing his guests abundant portions and making any meal feel like an Italian American wedding feast.

            Platters of made to order pasta, decadent seafood or meat entrees, and of course homemade desserts are all staples at Carmine's, meant for sharing among friends and family. When great food and wine are supported by friendly and knowledgeable service, the results are magic - we want every day to feel like a Sunday afternoon at Grandma's!
            
            We are open for Indoor & Outdoor Dining, Pick-up, Delivery, Catering and Private Parties.
            
            Your safety is our priority. As of 3/7/22, NYC no longer requires proof of vaccination to dine indoors. Indoor & Outdoor dining are available.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/26428905.jpg',
            fileName: '26428905.jpg',
            num_reviews: 22282
        },
        {
            name: 'La Masseria',
            address: '235 W 48th St, New York, NY 10036',
            price_range: '$30 and under',
            phone_number: '(212) 582-2111',
            open_time: '12pm',
            close_time: '12am',
            avg_rating: 4.5,
            cuisine: 'Italian',
            description: "La Masseria Restaurant is inspired from ancient fortified farmhouses that in the Puglia Region of Italy are called “Masseria”. Executive Chef/Co-Owner, Pino Coladonato, grew up on a Farm in Puglia. He was forced to eat whatever was available but soon was tired of bean puree and decided to take matters into his own hands, creating new ways to use the same few ingredients. Now, with limitless ingredients to choose from, fava beans, chickpeas and lentils are still a core element in many of his entrees. Interior Designer Libby Langdon has created a warm, inviting dining atmosphere. Rustic and relaxed, with plenty of old world charm. Oversize iron sconces custom made from antique wrought iron gates punctuate the walls, and artful displays of antique farm tools mixed with various authentic Italian photographs all add to the farmhouse appeal. The 250-bottle wine list encompasses all regions of Italy with few of the best American and the rest of the world.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/35740108.jpg',
            fileName: '35740108.jpg',
            num_reviews: 5548
        },
        {
            name: "Angelo's Pizza",
            address: '1697 Broadway, New York, NY 10019',
            price_range: '$30 and under',
            phone_number: '(212) 245-8811',
            open_time: '11:30am',
            close_time: '3am',
            avg_rating: 4.5,
            cuisine: 'Italian', 
            description: "We use Coal as a heating source to make our Coal Oven Pizza. We're close to lots of theaters in Broadway so good for before and after Show meals. We are next to late night show with Steven Colbert. We are close to time square.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/25292096.jpg',
            fileName: '25292096.jpg',
            num_reviews: 329
        },
        {
            name: 'DaMarino NYC',
            address: '1116 6th Ave, New York, NY 10036',
            price_range: '$31 to $50',
            phone_number: '(212) 541-6601',
            open_time: '4pm',
            close_time: '4am',
            avg_rating: 4.0,
            cuisine: 'Italian', 
            description: "Da Marino Restaurant is a uniquely sophisticated dining experience unlike any other in New York City. Just a few blocks from Times Square and located in the heart of theatrical shows, Da Marino welcomes all diners into a sweet escape that provides all the amenities of Italy for a day away from the ordinary.

            The luxurious experience features exciting live music as well as fresh Italian food prepared with the love and wealth of knowledge that Chef Pasquale has gained from studying the art of Italian cuisine in Calabria, Italy. Chef Pasquale only uses the best ingredients to create this masterful cuisine. Our melt-in-your-mouth mozzarella comes from Naples, our tomatoes are picked from the finest vines of Italy and our bread and pasta are mad in-house.
            
            We welcome you and hope you will come join us.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24908238.jpg',
            fileName: '24908238.jpg',
            num_reviews: 1964
        },
        {
            name: 'Il Forno',
            address: '709 8th Ave, New York, NY 10036',
            price_range: '$30 and under',
            phone_number: '(917) 994-9663',
            open_time: '5pm',
            close_time: '1am',
            avg_rating: 4.0,
            cuisine: 'Italian', 
            description: "iL Forno Italian Kitchen is a Hell's Kitchen gem. Bringing modern Italian to a whole new level. Everything that comes from our kitchen is prepared from scratch with the utmost care by Executive Chef Sarah Pouzar. So whether you stop in for a glass of wine and one of our artisan pizzas, or a full and rich Italian supper, iL Forno will take care of you.",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24929009.jpg',
            fileName: '24929009.jpg',
            num_reviews: 7342
        },
        {
            name: "Olio e Più",
            address: '3 Greenwich Ave, New York, NY 10014',
            price_range: '$30 and under',
            phone_number: '(212) 243-6546',
            open_time: '11am',
            close_time: '12am',
            avg_rating: 4.5,
            cuisine: 'Italian', 
            description: "Inspired by the warmth and comfort of the Italian countryside, Olio e Più and Chef Pedro Cruz bring tradition and authentic Italian cuisine to the West Village. Enjoy fresh, house-made pastas dressed with the highest quality ingredients and a hand-selected collection of excellent wines and cocktails to pair with your dish. An expertly crafted wood-fire oven crackles and glows, cooking house-made dough into perfect, crisp Neapolitan-style pizza while creating an inviting atmosphere.
            We look forward to welcoming you! (you can find the hours of operation on this page)*
            
            *Please note that kitchen hours may differ",
            file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/31308461.png',
            fileName: '31308461.png',
            num_reviews: 668
        },
        {
        name: 'Indian Accent',
        address: '123 W 56th St, New York, NY 10019',
        price_range: '$50 and over',
        phone_number: '(212) 842-8070',
        open_time: '5pm',
        close_time: '10:30pm',
        avg_rating: 4.5,
        cuisine: 'Indian', 
        description: "Indian Accent offers an inventive approach to Indian cuisine.

        Indian Accent's menu reinterprets nostalgic Indian dishes with an openness towards global techniques and influences. Chef Manish Mehrotra highlights distinctly Indian flavors on a contemporary menu.
        
        To respect the dining experiences of all our guests we practice a restricted entrance policy, only allowing children aged 10 years and above.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24195931.jpg',
        fileName: '24195931.jpg',
        num_reviews: 2709
    },
    {
        name: 'Dhaba',
        address: '108 Lexington Ave, New York, NY 10016',
        price_range: '$30 and under',
        phone_number: '(212) 679-1284',
        open_time: '12pm',
        close_time: '12am',
        avg_rating: 4.5,
        cuisine: 'Indian', 
        description: "Dhaba serves authentic North Indian food and kababs from the tandoor. Offerings also include an array of curries from the 'British Curry House' setting that will satisfy a variety of curry cravings. The restaurant is open late with a limited choice menu to cater to late night cravings.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24608019.png',
        fileName: '24608019.png',
        num_reviews: 701
    },
    {
        name: 'Bhatti Indian Grill',
        address: '100 Lexington Ave, New York, NY 10016',
        price_range: '$31 to $50',
        phone_number: '(212) 683-4228 ext. 4229',
        open_time: '12pm',
        close_time: '10pm',
        avg_rating: 4.0,
        cuisine: 'Indian', 
        description: "Bhatti Indian Grill is an ultra-authentic north Indian restaurant in the heart of NYC that’s refined yet affordable, upscale and modern. Bhatti opened its doors in 2009 to much fan fare and accolades for the authenticity it brought to indian cuisine.

        One of the city’s preeminent Indian chefs and restaurateurs, Gaurav Anand of Awadh and Moti Mahal Delux has completely revamped and renovated Bhatti just in time to celebrate its 10th anniversary this year. Perennially packed and attracting celebrities like Jennifer Lawrence and Food Network’s Duff Goldman, Bhatti became a popular dining destination due to its delicious, boldly-flavored food, especially kebabs. For its 10th anniversary, Gaurav wanted the restaurant that set him on a successful restaurant career to get a sexier new look, more elevated menu and an adventurous beverage program including an all natural wine list, befitting the next decade.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/31804517.jpg',
        fileName: '31804517.jpg',
        num_reviews: 495
    },
    {
        name: 'Utsav Indian Bar and Grill',
        address: '1185 6th Ave, New York, NY 10036',
        price_range: '$30 and under',
        phone_number: '(212) 575-2525',
        open_time: '12pm',
        close_time: '10:30pm',
        avg_rating: 4.5,
        cuisine: 'Indian', 
        description: "Utsav is a spacious bi level restaurant in the heart of Times Square located uniquely on a skywalk between two buildings. There is a bar on the lower level and the large upper level features floor to ceiling glass windows overlooking both 46th & 47th streets. There is ample room for social distancing in this current environment & all COVID guidelines are strictly adhered to. We offer an extensive Indian menu with traditional regional dishes as well as some with a modern twist. We have just introduced our new INDO CHINESE menu & welcome large groups in our spacious restaurant.
        Utsav offers various rooms for hosting private events. There is a room which can seat 25-30 people & a larger one to accommodate 70-80 people. A buyout of the restaurant is also possible on certain days of the week. Please call our catering manager to find out more details, let us host your next event for you!",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/32261302.jpg',
        fileName: '32261302.jpg',
        num_reviews: 1648
    },
    {
        name: 'Tamarind- Tribeca',
        address: '99 Hudson St, New York, NY 10013',
        price_range: '$31 to $50',
        phone_number: '(212) 775-9000',
        open_time: '11:30am',
        close_time: '11:30pm',
        avg_rating: 4.5,
        cuisine: 'Indian', 
        description: "TO RESPECT THE PRIVACY & COMFORT OF ALL DINING PATRONS, WE PRACTICE A RESTRICTED ENTRANCE POLICY ALLOWING CHILDREN ONLY ABOVE 8 YEARS OF AGE.
        WE DO NOT HAVE HIGH CHAIRS AND BOOSTER SEATS.
        
        ALL CANCELLATIONS MUST BE MADE AT LEAST 48 HOURS IN ADVANCE FOR PARTY SIZE 7 GUESTS AND ABOVE, AND MARKED FOR THE MANAGER ON DUTY. IN CASE THE RESERVATION IS CANCELLED LESS THAN 48 HOURS FROM THE RESERVED TIME, THE CREDIT CARD ON FILE WILL BE CHARGED $35 PER PERSON IN ADDITION TO THE PRIVATE ROOM CHARGES.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/23685215.jpg',
        fileName: '23685215.jpg',
        num_reviews: 4121
    },
    {
        name: "Spice Symphony - 50th St.",
        address: '150 E 50th St, New York, NY 10022',
        price_range: '$30 and under',
        phone_number: '(212) 300-4869',
        open_time: '11am',
        close_time: '10:30pm',
        avg_rating: 4.5,
        cuisine: 'Indian', 
        description: "'The New York Times' - The Marriage of Indian and Chinese Cuisines Hungry City: Spice Symphony in Midtown East
        Our cuisine is classical Indian food from all regions of India carefully prepared by star chef. Our 'grandmotherly cooking,' with whole spices for a more rustic texture will blow you away.We are rated as one of the top Indian Cuisine in New York. We bring to you coastal curries from Goa, Konkan, Karwar, Allepy, Madurai, Kolkata to name a few and also a few dishes of Chinese with Indian Spices ( Indo Chinese).
        Our Wine List is something that we are proud to present.
        We are home,family and friends.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24874487.jpg',
        fileName: '24874487.jpg',
        num_reviews: 1725
    },
    {
        name: "Philippe Chow - Downtown",
        address: '355 W 16th St, New York, NY 10011',
        price_range: '$31 to $50',
        phone_number: '(212) 885-9400',
        open_time: '5pm',
        close_time: '11:30pm',
        avg_rating: 4.5,
        cuisine: 'Chinese', 
        description: "Philippe puts his own spin on traditional Beijing-style cuisine with results that are modern, flavorful and theatrical. All specialty dishes are served family-style, giving all guests the opportunity to experience a taste in every dish ordered. Our philosophy focuses on bringing people together for an experience that they can share with one another – starting with our signature dishes.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/47086062.jpg',
        fileName: '47086062.jpg',
        num_reviews: 752
    },
    {
        name: 'Buddakan NY',
        address: '75 9th Ave, New York, NY 10011',
        price_range: '$50 and over',
        phone_number: '(212) 989-6699',
        open_time: '5pm',
        close_time: '12am',
        avg_rating: 4.5,
        cuisine: 'Chinese', 
        description: "The surreal atmosphere of this awe-inspiring restaurant in the Meatpacking district of Manhattan
        combines the serenity of Asia with the flamboyance of 16th century Paris. The menu features fanciful interpretations of Chinese dishes and delights even the most discriminating palates.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/32683328.jpg',
        fileName: '32683328.jpg',
        num_reviews: 14520
    },
    {
        name: "TAO Uptown",
        address: '42 E 58th St, New York, NY 10022',
        price_range: '$31 to $50',
        phone_number: '(212) 888-2288',
        open_time: '11:30am',
        close_time: '12am',
        avg_rating: 4.5,
        cuisine: 'Chinese', 
        description: "A 16-foot Buddha, which floats above a reflecting pool filled with Japanese carp, presides over the scene at Tao. A favorite destination for celebrities and athletes, this Pan Asian restaurant specializes in authentic Hong Kong Chinese, Japanese and Thai cuisines. Tao has three levels of dining including the prized 'Skybox' which offers views of this former movie theater unparalleled in New York. In addition to its 300 seats, Tao includes a sushi bar, lounge and two bars at which to enjoy the food and the show. Appetizers range from $8 - $18; Entrees: $16 -$39. Offering $31.50 Prix Fixe Lunch Menu year round.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/47199489.jpg',
        fileName: '47199489.jpg',
        num_reviews: 12711
    },
    {
        name: 'Sei Less',
        address: '156 W 38th St, New York, NY 10018',
        price_range: '$31 to $50',
        phone_number: '(212) 586-2675',
        open_time: '12pm',
        close_time: '1am',
        avg_rating: 4.5,
        cuisine: 'Chinese', 
        description: "Curiously nestled behind an enigmatic mural in Midtown, behind a blink-and-you’ll-miss-it door stands Sei Less, a newly minted Asian fusion restaurant. With close proximity to Madison Square Garden and the Garment District, Sei Less is the new hot spot that all fiveboroughs will be talking about.

        Designed for evenings of enviable cuisine and distinctive revelry, the spacefeatures seating for 350 guests juxtaposed with a meticulously curatedcollection of modern art and clean lines, alongside traditional, hand carved Asian design elements in an homage to the architectural pagodas ofgenerations’ past.
        
        The curated Pan-Asian menu with a one-of-a-kindcocktail experience as well as mocktails, for the sober-curious set, isdesigned to enhance every evening. In addition to the main dining area,the venue will offer 4 private dining areas to accommodate private parties and events.",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/47121779.jpg',
        fileName: '47121779.jpg',
        num_reviews: 508
    },
    {
        name: 'Jue Lan Club',
        address: '49 W 20th St, New York, NY 10011',
        price_range: '$31 to $50',
        phone_number: '(646) 524-7409',
        open_time: '12pm',
        close_time: '11pm',
        avg_rating: 4.5,
        cuisine: 'Chinese', 
        description: "Jue Lan Club is a multi-level, 275 seat Asian-Fusion restaurant featuring our 100 seat outdoor garden courtyard. We have several distinctive private dining rooms. Jue Lan features an incredibly flavorful Asian Raw Menu, numerous Dim Sum options along with other classic Asian-Fusion dishes with a contemporary spin by our chef Nick Zhong! Dine on our one of a kind sweet creations by our Head Pasty Chef McCleeford Orientus.
        Please visit us on all social media @JueLanClub / Web JueLanClub.com",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24982449.jpg',
        fileName: '24982449.jpg',
        num_reviews: 1800
    },
    {
        name: "Xu's Public House",
        address: '15 Union Square W, New York, NY 10003',
        price_range: '$30 and under',
        phone_number: '(212) 901-9971',
        open_time: '11am',
        close_time: '10pm',
        avg_rating: 4.5,
        cuisine: 'Chinese', 
        description: "The idea behind Xu’s Public House is to bring a unique, authentic Chinese dining experience to New York.

        The cuisine is primarily Shanghai-influenced but draws its inspiration from various of China’s many provinces.
        
        The menu, created by renowned, Shanghai-based chef Louis Shen and his staff, places particular emphasis on fresh, high-quality ingredients and eye-pleasing presentation.
        
        Enjoy!
        
        Alcoholic Beverages Available!",
        file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/26861765.jpg',
        fileName: '26861765.jpg',
        num_reviews: 94
    },
    {
    name: 'Marseille',
    address: '630 9th Ave, New York, NY 10036',
    price_range: '$30 and under',
    phone_number: '(212) 333-2323',
    open_time: '11:30am',
    close_time: '11:30pm',
    avg_rating: 4.5,
    cuisine: 'French', 
    description: "For nearly two decades, Marseille has been the essential French brasserie of Broadway & Hell’s Kitchen, its favorite gathering place and its premiere dining destination. The brasserie has long been known as the heartbeat of its neighborhood, and as such Marseilles is beloved by neighbors, theatre goers, performers, tourists, and lovers of joie de vivre of all ages and backgrounds.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/23892913.jpg',
    fileName: '23892913.jpg',
    num_reviews: 7793
},
{
    name: 'Cafe Cluny',
    address: '284 W 12th St, New York, NY 10014',
    price_range: '$31 to $50',
    phone_number: '(212) 255-6900',
    open_time: '10am',
    close_time: '10pm',
    avg_rating: 4.5,
    cuisine: 'French', 
    description: "Open since 2006, Cafe Cluny is a neighborhood spot offering French - American dishes with a polished flare. Our Executive Chef Andy Xu takes pride in his thoughtful selections here, as well as at our sister restaurants The Odeon and Café Luxembourg.

    Whether you need that charming place for a date, are in search of the perfect brunch, or just want the best steak frites in town - you will be glad you came to the West Village's famous Cafe Cluny.
    
    We do not accept reservations during Brunch on the weekends and seat tables on a first come first serve basis",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/23697660.jpg',
    fileName: '23697660.jpg',
    num_reviews: 1842
},
{
    name: 'Boucherie - West Village',
    address: '99 7th Ave S, New York, NY 10014',
    price_range: '$31 to $50',
    phone_number: '(212) 837-1616',
    open_time: '10am',
    close_time: '12am',
    avg_rating: 4.5,
    cuisine: 'French', 
    description: "BOUCHERIE is a traditional French brasserie and steakhouse, celebrating Joie de Vivre in the heart of West Village. The restaurant prepares a menu of French classics and timeless bistro favorites, in addition to the dry-aged steaks. An absinthe-inspired bar offers classic drinks, signature cocktails and craft beers. Located in the building that used to house the prominent Circle Repertory Theater, the 320-seat restaurant provides a diverse array of dining options from the spacious dining room, a seat at the butcher counter, the intimate second-floor gallery with private dining and outdoor cafe. Boucherie has adapted to the current environment to make the dining experience safe for guests and staff.
    We look forward to welcoming you! (you can find the hours of operation on this page)*
    
    *Please note that kitchen hours may differ",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/49963551.jpg',
    fileName: '49963551.jpg',
    num_reviews: 2358
},
{
    name: 'Le Coucou',
    address: '138 Lafayette St, New York, NY 10013',
    price_range: '$50 and over',
    phone_number: '(212) 271-4252',
    open_time: '11:30am',
    close_time: '11pm',
    avg_rating: 4.5,
    cuisine: 'French', 
    description: "After taking the Parisian dining scene by storm, acclaimed chef Daniel Rose brings home the James Beard 'Best New Restaurant' award for his very first stateside restaurant. Located in SoHo, the space is a gracious modern nod to fine European gastronomy, with crisp linens, fliberking candles, and whitewashed brick. Updating classical French cuisine with charm and verve, Rose shrinks the intercontinental divide separating the City of Light and the Big Apple, proving that the true essence of fine French dining can thrive in any time zone.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24603881.jpg',
    fileName: '24603881.jpg',
    num_reviews: 3791
},
{
    name: 'Koloman',
    address: '16 W 29th St, New York, NY 10001',
    price_range: '$50 and over',
    phone_number: '(212) 790-8970',
    open_time: '7:30am',
    close_time: '11pm',
    avg_rating: 4.5,
    cuisine: 'French', 
    description: "Koloman is a contemporary French restaurant where Chef Markus Glocker blends Parisian creativity with Viennese tradition. It echoes the neighborhood buzz of Secessionist-era European cafes in an iconic NoMad location.

    For reservations for groups 7 and over, special events or private dining, please call or email us at info@kolomanrestaurant.com.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/50572425.png',
    fileName: '50572425.png',
    num_reviews: 170
},
{
    name: "Le Parisien",
    address: '163 E 33rd St, New York, NY 10016',
    price_range: '$30 and under',
    phone_number: '(212) 889-5489',
    open_time: '12pm',
    close_time: '9:30pm',
    avg_rating: 4.5,
    cuisine: 'French', 
    description: "Le Parisien is the go-to neighborhood bistrot for Murray Hill, offering classic French food like steak frites, escargots and moules marinieres, paired with a well-edited list of french wines.
    Chef Johnathan Masse brings his expert knowledge of comfort food, having most recently served as sous chef at the Waverly Inn, and also for Chef Jonathan Waxman of Barbuto. Along with owner Christian Merand, formerly of Jean-Claude in Soho, they have created a restaurant that focuses on serving consistently great traditional food with a lively and unmistakeably French atmosphere.
    
    Also open daily for lunch and brunch on weekends.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/24816207-1.jpg',
    fileName: '24816207-1.jpg',
    num_reviews: 1907
},
{
    name: "Kumi Japanese Restaurant & Bar - NYC",
    address: '120 W 57th St, New York, NY 10019',
    price_range: '$50 and over',
    phone_number: '(212) 671-0439',
    open_time: '5pm',
    close_time: '11pm',
    avg_rating: 4.0,
    cuisine: 'Japanese', 
    description: "Kumi Restaurant + Lounge combines East-Asian ingredients with Korean flavors, creating a modern approach to Japanese Cuisine. Utilizing sustainably sourced ingredients, guests are welcome to indulge in a variety of shared plates, seasonal fish selections ranging from raw to seared, as well as an array of bold dishes including Chili Lobster Tempura, Miso Black Cod and the Wagyu Ribeye. Kumi’s dining experience is complemented with a list of fine wines, Japanese whiskeys, ultra-premium sakes, and specialty libations.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/47145770.jpg',
    fileName: '47145770.jpg',
    num_reviews: 99
},
{
    name: 'Zuma Japanese Restaurant - NY',
    address: '261 Madison Ave, New York, NY 10016',
    price_range: '$50 and over',
    phone_number: '(212) 544-9862',
    open_time: '11:30am',
    close_time: '11:30pm',
    avg_rating: 4.5,
    cuisine: 'Japanese', 
    description: "Zuma, the brainchild of award winning co-founder and creator, Rainer Becker, brings its internationally acclaimed style of contemporary Japanese cuisine to midtown, New York.

    Serving dishes designed to share and inspired by the informal dining style of izakaya; the three kitchens present authentic yet alluring options, with bold flavors and simple presentation, highlighting quality ingredients.
    261 Madison Avenue 10016",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/23896524.jpg',
    fileName: '23896524.jpg',
    num_reviews: 1495
},
{
    name: "Sushi by Bou - Nomad",
    address: '32A East 32nd Street Lobby, 32 E 32nd St, New York, NY 10016',
    price_range: '$31 to $50',
    phone_number: '(917) 268-7268',
    open_time: '5pm',
    close_time: '11pm',
    avg_rating: 5.0,
    cuisine: 'Japanese', 
    description: "Sushi by Bou NoMad is a timed Omakase experience located in the LOBBY of Hotel 3232 (32 E 32 St). This location is NOT the Hotel Suite 1001 Experience. Parties of 1-4 will be reserved with our Signature $60/per person 30-minute Omakase. Parties of 5 or more will be reserved for the Bougie Package, a longer $100/per person 60-minute Omakase seating! The Bougie Package is REQUIRED for groups of 5 or more and includes 17-courses plus a handroll.

    Sushi by Bou NoMad's 24-hour Cancellation Policy: A 50% per person fee will apply to cancellations and no-shows for reservations made within 24 hours of reservation time. Text 917.268.7268 to cancel your reservation within 24 hours of reserved time. No phone calls, please!
    
    Parties of 1-4 who wish to book our Bougie 60-min Omakase should text 917.268.7268 their full name, preferred location/date/time, number of guests, and email address. *Space is limited and we cannot guarantee we will be able to honor requests submitted via your booking notes*",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/49380984.jpg',
    fileName: '49380984.jpg',
    num_reviews: 27
},
{
    name: 'Nobu Fifty Seven',
    address: '40 W 57th St, New York, NY 10019',
    price_range: '$31 to $50',
    phone_number: '(212) 757-3000',
    open_time: '12pm',
    close_time: '11pm',
    avg_rating: 4.5,
    cuisine: 'Japanese', 
    description: "As the first uptown New York location for legendary chef Nobu Matsuhisa, we opened with much anticipation in the summer of 2005.Nobu's co-owners are his longtime partners: renowned restaurateur Drew Nieporent, Oscar-winning actor Robert De Niro, and Hollywood film producer Meir Teper. The restaurant showcases Nobu's signature new style Japanese cuisine with classic dishes such as Tiradito Nobu Style and Black Cod Miso, and the hibachi table. The restaurant received three stars from the New York Times.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/50458861.jpg',
    fileName: '50458861.jpg',
    num_reviews: 4807
},
{
    name: 'BONDST',
    address: '6 Bond St, New York, NY 10012',
    price_range: '$50 and over',
    phone_number: '(646) 524-7410',
    open_time: '6pm',
    close_time: '10:30pm',
    avg_rating: 5.0,
    cuisine: 'Japanese', 
    description: "BONDST, located in NoHo, is a trendy downtown restaurant with a warm minimalist interior design. The cuisine is new Japanese with European and Asian influences. BONDST is Citysearch's 2007 and 2008 audience award winner for Best Sushi in NYC, as well as the 2008 audience award winner for Best Martini in NYC.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/23677354.jpg',
    fileName: '23677354.jpg',
    num_reviews: 2519
},
{
    name: "Wokuni",
    address: '327 Lexington Ave, New York, NY 10016',
    price_range: '$31 to $50',
    phone_number: '(212) 447-1212',
    open_time: '11:30am',
    close_time: '10pm',
    avg_rating: 4.5,
    cuisine: 'Japanese', 
    description: "We, Tokyo Ichiban Foods, started our business in the restaurant industry. We continue to pursue serving quality food that will delight our guests, and we cherish our relationship with them. Today, pivoting from our strong origin, we are also expanding our scope of business to aqua-farming, seafood processing and distribution.
    We oversee the process through professional culinary eyes, from when the fish is cultivated until it is served to our guests. This allows us to build a sustainable and traceable system that will lead to higher customer satisfaction.
    Japanese cuisine is blessed with opulent nature from both the mountains and the sea, which brings us rich seafood. Our wish is to bring quality seafood and Japanese food culture to the world, making the global food culture even richer and stronger.",
    file: 'https://connectable-seeds.s3.us-east-2.amazonaws.com/25114879.jpg',
    fileName: '25114879.jpg',
    num_reviews: 939
}
    ]
    puts "Creating restaurants..."

    RESTAURANTS.each do |restaurant_params|
        keys = {
            name: restaurant_params[:name],
            address: restaurant_params[:address],
            price_range: restaurant_params[:price_range],
            phone_number: restaurant_params[:phone_number],
            open_time: restaurant_params[:open_time],
            close_time: restaurant_params[:close_time],
            avg_rating: restaurant_params[:avg_rating],
            description: restaurant_params[:description],
            cuisine: restaurant_params[:cuisine]
        }
        obj = Restaurant.create(keys)
        obj.photo.attach(io: URI.open(restaurant_params[:file]),
        filename: restaurant_params[:fileName]
        )
    end

#     # More users
#     10.times do 
#         User.create!({
#         first_name: Faker::Internet.unique.first_name(specifier: 3),
#         last_name: Faker::Internet.unique.last_name(specifier: 3),
#         email: Faker::Internet.unique.email,
#         password: 'password'
#         }) 
#     end

#     puts "Done!"
# end