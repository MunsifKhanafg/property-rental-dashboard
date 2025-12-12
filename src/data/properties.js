// src/data/properties.js

const properties = [
    // --- Original 30 Properties (IDs 1 - 30) ---

    // 1. Downtown Loft (New York)
    {
        id: 1,
        title: 'Modern Industrial Loft',
        location: { city: 'New York', state: 'NY' },
        area: 1100,
        beds: 1,
        baths: 1,
        price: 3800,
        rating: 4.5,
        mainImage: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Loft'
    },
    // 2. Beach House (Miami)
    {
        id: 2,
        title: 'Luxury Beachfront Villa',
        location: { city: 'Miami', state: 'FL' },
        area: 4500,
        beds: 5,
        baths: 4.5,
        price: 9500,
        rating: 4.9,
        mainImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1642287/pexels-photo-1642287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 3. Suburban Home (Chicago)
    {
        id: 3,
        title: 'Classic Suburban Family Home',
        location: { city: 'Chicago', state: 'IL' },
        area: 2800,
        beds: 4,
        baths: 3,
        price: 4900,
        rating: 4.3,
        mainImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 4. City Condo (Los Angeles)
    {
        id: 4,
        title: 'High-Rise Condo with Views',
        location: { city: 'Los Angeles', state: 'CA' },
        area: 950,
        beds: 2,
        baths: 2,
        price: 4200,
        rating: 4.6,
        mainImage: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },
    // 5. Townhouse (Dallas)
    {
        id: 5,
        title: 'Contemporary Townhome',
        location: { city: 'Dallas', state: 'TX' },
        area: 1750,
        beds: 3,
        baths: 2.5,
        price: 3400,
        rating: 4.2,
        mainImage: 'https://images.pexels.com/photos/1402379/pexels-photo-1402379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1402379/pexels-photo-1402379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 6. Studio Apartment (San Francisco)
    {
        id: 6,
        title: 'Cozy Studio Apartment',
        location: { city: 'San Francisco', state: 'CA' },
        area: 550,
        beds: 0,
        baths: 1,
        price: 2400,
        rating: 4.0,
        mainImage: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Studio'
    },
    // 7. Mountain Cabin (Denver)
    {
        id: 7,
        title: 'Rustic Mountain Cabin',
        location: { city: 'Denver', state: 'CO' },
        area: 1600,
        beds: 3,
        baths: 2,
        price: 3900,
        rating: 4.7,
        mainImage: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Cabin'
    },
    // 8. Luxury Apartment (Boston)
    {
        id: 8,
        title: 'Modern Apartment near Downtown',
        location: { city: 'Boston', state: 'MA' },
        area: 1300,
        beds: 2,
        baths: 2,
        price: 4500,
        rating: 4.4,
        mainImage: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 9. Mediterranean Mansion (Beverly Hills)
    {
        id: 9,
        title: 'Stunning Mediterranean Mansion',
        location: { city: 'Beverly Hills', state: 'CA' },
        area: 7500,
        beds: 8,
        baths: 9,
        price: 18000,
        rating: 5.0,
        mainImage: 'https://images.pexels.com/photos/6032276/pexels-photo-6032276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            
            'https://images.pexels.com/photos/1029285/pexels-photo-1029285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Mansion'
    },
    // 10. Historic Townhouse (Philadelphia)
    {
        id: 10,
        title: 'Charming Historic Townhouse',
        location: { city: 'Philadelphia', state: 'PA' },
        area: 1900,
        beds: 3,
        baths: 2.5,
        price: 3500,
        rating: 4.1,
        mainImage: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/3771804/pexels-photo-3771804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 11. New Home (Seattle)
    {
        id: 11,
        title: 'Newly Built Family Home',
        location: { city: 'Seattle', state: 'WA' },
        area: 2400,
        beds: 4,
        baths: 3,
        price: 5800,
        rating: 4.5,
        mainImage: 'https://images.pexels.com/photos/2079032/pexels-photo-2079032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/4033285/pexels-photo-4033285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 12. Small Apartment (Atlanta)
    {
        id: 12,
        title: 'Efficiency Apartment',
        location: { city: 'Atlanta', state: 'GA' },
        area: 600,
        beds: 1,
        baths: 1,
        price: 1900,
        rating: 3.8,
        mainImage:  'https://images.pexels.com/photos/2440473/pexels-photo-2440473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
           
            'https://images.pexels.com/photos/271775/pexels-photo-271775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 13. Duplex (Charlotte)
    {
        id: 13,
        title: 'Split-Level Duplex',
        location: { city: 'Charlotte', state: 'NC' },
        area: 1800,
        beds: 3,
        baths: 2,
        price: 3200,
        rating: 4.0,
        mainImage: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Duplex'
    },
    // 14. Condo (San Diego)
    {
        id: 14,
        title: 'Waterfront Condo',
        location: { city: 'San Diego', state: 'CA' },
        area: 1400,
        beds: 2,
        baths: 2,
        price: 4900,
        rating: 4.7,
        mainImage: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/3935332/pexels-photo-3935332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279745/pexels-photo-279745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },
    // 15. Single Family Home (Houston)
    {
        id: 15,
        title: 'Spacious Single-Family Residence',
        location: { city: 'Houston', state: 'TX' },
        area: 3000,
        beds: 4,
        baths: 3.5,
        price: 5500,
        rating: 4.4,
        mainImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 16. Studio (Portland)
    {
        id: 16,
        title: 'Compact Studio Loft',
        location: { city: 'Portland', state: 'OR' },
        area: 450,
        beds: 0,
        baths: 1,
        price: 2000,
        rating: 3.9,
        mainImage: 'https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/276725/pexels-photo-276725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Studio'
    },
    // 17. Townhouse (San Jose)
    {
        id: 17,
        title: 'Green Belt Townhouse',
        location: { city: 'San Jose', state: 'CA' },
        area: 1650,
        beds: 3,
        baths: 2.5,
        price: 3950,
        rating: 4.2,
        mainImage: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279752/pexels-photo-279752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 18. Luxury Apartment (Phoenix)
    {
        id: 18,
        title: 'Premium Apartment Complex',
        location: { city: 'Phoenix', state: 'AZ' },
        area: 1250,
        beds: 2,
        baths: 2,
        price: 2800,
        rating: 4.6,
        mainImage: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1080709/pexels-photo-1080709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 19. Cottage (Orlando)
    {
        id: 19,
        title: 'Charming Lakeside Cottage',
        location: { city: 'Orlando', state: 'FL' },
        area: 1400,
        beds: 3,
        baths: 2,
        price: 3100,
        rating: 4.3,
        mainImage: 'https://images.pexels.com/photos/4006190/pexels-photo-4006190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/4006190/pexels-photo-4006190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1488326/pexels-photo-1488326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2775681/pexels-photo-2775681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Cottage'
    },
    // 20. Townhouse (Nashville)
    {
        id: 20,
        title: 'Modern Townhouse near City Center',
        location: { city: 'Nashville', state: 'TN' },
        area: 1850,
        beds: 3,
        baths: 2.5,
        price: 3600,
        rating: 4.1,
        mainImage:  'https://images.pexels.com/photos/1475935/pexels-photo-1475935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
           
            'https://images.pexels.com/photos/1643196/pexels-photo-1643196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 21. Ranch Home (Austin)
    {
        id: 21,
        title: 'Mid-Century Ranch Home',
        location: { city: 'Austin', state: 'TX' },
        area: 2100,
        beds: 3,
        baths: 2,
        price: 4800,
        rating: 4.3,
        mainImage: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2756813/pexels-photo-2756813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/209265/pexels-photo-209265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 22. Condominium (Chicago)
    {
        id: 22,
        title: 'Modern Condominium in West Loop',
        location: { city: 'Chicago', state: 'IL' },
        area: 1400,
        beds: 2,
        baths: 2,
        price: 3600,
        rating: 4.5,
        mainImage: 'https://images.pexels.com/photos/279745/pexels-photo-279745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/279745/pexels-photo-279745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },
    // 23. Studio Apartment (Washington D.C.)
    {
        id: 23,
        title: 'Furnished Studio near Capitol',
        location: { city: 'Washington', state: 'DC' },
        area: 500,
        beds: 0,
        baths: 1,
        price: 2600,
        rating: 3.7,
        mainImage: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Studio'
    },
    // 24. Lake House (Minnetonka)
    {
        id: 24,
        title: 'Sprawling Lakefront Home',
        location: { city: 'Minnetonka', state: 'MN' },
        area: 3200,
        beds: 4,
        baths: 3.5,
        price: 6500,
        rating: 4.8,
        mainImage: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 25. Duplex (Detroit)
    {
        id: 25,
        title: 'Renovated Duplex Unit',
        location: { city: 'Detroit', state: 'MI' },
        area: 1500,
        beds: 3,
        baths: 1.5,
        price: 1800,
        rating: 3.6,
        mainImage: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Duplex'
    },
    // 26. Luxury Apartment (San Antonio)
    {
        id: 26,
        title: 'Luxury Apartment with Pool Access',
        location: { city: 'San Antonio', state: 'TX' },
        area: 1150,
        beds: 2,
        baths: 2,
        price: 2500,
        rating: 4.5,
        mainImage: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 27. Modern Townhouse (Salt Lake City)
    {
        id: 27,
        title: 'Modern Townhouse near Mountains',
        location: { city: 'Salt Lake City', state: 'UT' },
        area: 1700,
        beds: 3,
        baths: 3,
        price: 3800,
        rating: 4.6,
        mainImage: 'https://images.pexels.com/photos/279752/pexels-photo-279752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/279752/pexels-photo-279752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 28. House (Milwaukee)
    {
        id: 28,
        title: 'Traditional Single-Family Home',
        location: { city: 'Milwaukee', state: 'WI' },
        area: 2500,
        beds: 4,
        baths: 2.5,
        price: 2900,
        rating: 4.0,
        mainImage:'https://images.pexels.com/photos/1080709/pexels-photo-1080709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 29. Cottage (Raleigh)
    {
        id: 29,
        title: 'Quaint Cottage with Garden',
        location: { city: 'Raleigh', state: 'NC' },
        area: 1200,
        beds: 2,
        baths: 1,
        price: 2300,
        rating: 3.9,
        mainImage: 'https://images.pexels.com/photos/2775681/pexels-photo-2775681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2775681/pexels-photo-2775681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/4006190/pexels-photo-4006190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1488326/pexels-photo-1488326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Cottage'
    },
    // 30. Condo (Philadelphia)
    {
        id: 30,
        title: 'Gated Community Condo',
        location: { city: 'Philadelphia', state: 'PA' },
        area: 1050,
        beds: 2,
        baths: 1,
        price: 2900,
        rating: 4.1,
        mainImage: 'https://images.pexels.com/photos/3935332/pexels-photo-3935332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/3935332/pexels-photo-3935332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },

    // --- NEW 20 Properties (IDs 31 - 50) ---

    // 31. Luxury Penthouse (Chicago)
    {
        id: 31,
        title: 'Skyline View Penthouse',
        location: { city: 'Chicago', state: 'IL' },
        area: 2500,
        beds: 3,
        baths: 3,
        price: 12000,
        rating: 4.9,
        mainImage: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/3771804/pexels-photo-3771804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },
    // 32. Farmhouse (Upstate NY)
    {
        id: 32,
        title: 'Rustic Farmhouse Retreat',
        location: { city: 'Ithaca', state: 'NY' },
        area: 3500,
        beds: 5,
        baths: 3,
        price: 4100,
        rating: 4.7,
        mainImage: 'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 33. Duplex (St. Louis)
    {
        id: 33,
        title: 'Historic Duplex near Park',
        location: { city: 'St. Louis', state: 'MO' },
        area: 1700,
        beds: 2,
        baths: 1.5,
        price: 2100,
        rating: 3.8,
        mainImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Duplex'
    },
    // 34. Cottage (Savannah)
    {
        id: 34,
        title: 'Southern Charm Cottage',
        location: { city: 'Savannah', state: 'GA' },
        area: 1300,
        beds: 2,
        baths: 2,
        price: 2700,
        rating: 4.4,
        mainImage: 'https://images.pexels.com/photos/1488326/pexels-photo-1488326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            
            'https://images.pexels.com/photos/2775681/pexels-photo-2775681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/4006190/pexels-photo-4006190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Cottage'
    },
    // 35. Townhouse (San Francisco)
    {
        id: 35,
        title: 'Modern Townhouse with Garage',
        location: { city: 'San Francisco', state: 'CA' },
        area: 1800,
        beds: 3,
        baths: 3.5,
        price: 6200,
        rating: 4.6,
        mainImage: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279752/pexels-photo-279752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 36. Apartment (Denver)
    {
        id: 36,
        title: 'Spacious Apartment with Balcony',
        location: { city: 'Denver', state: 'CO' },
        area: 1000,
        beds: 2,
        baths: 1,
        price: 3300,
        rating: 4.2,
        mainImage: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 37. Condo (Tampa)
    {
        id: 37,
        title: 'Gated Condo near Coast',
        location: { city: 'Tampa', state: 'FL' },
        area: 1250,
        beds: 2,
        baths: 2,
        price: 3100,
        rating: 4.0,
        mainImage: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/3935332/pexels-photo-3935332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },
    // 38. House (San Antonio)
    {
        id: 38,
        title: 'Modern Family Home',
        location: { city: 'San Antonio', state: 'TX' },
        area: 2700,
        beds: 4,
        baths: 3,
        price: 4500,
        rating: 4.3,
        mainImage: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 39. Studio (Las Vegas)
    {
        id: 39,
        title: 'Strip View Studio',
        location: { city: 'Las Vegas', state: 'NV' },
        area: 550,
        beds: 0,
        baths: 1,
        price: 2900,
        rating: 4.1,
        mainImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Studio'
    },
    // 40. Townhouse (Baltimore)
    {
        id: 40,
        title: 'Inner Harbor Townhouse',
        location: { city: 'Baltimore', state: 'MD' },
        area: 1950,
        beds: 3,
        baths: 2.5,
        price: 3300,
        rating: 3.9,
        mainImage: 'https://images.pexels.com/photos/1643196/pexels-photo-1643196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1643196/pexels-photo-1643196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1475935/pexels-photo-1475935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 41. House (Richmond)
    {
        id: 41,
        title: 'Classic Brick Home',
        location: { city: 'Richmond', state: 'VA' },
        area: 2600,
        beds: 4,
        baths: 2,
        price: 3500,
        rating: 4.2,
        mainImage: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2079032/pexels-photo-2079032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/4033285/pexels-photo-4033285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 42. Apartment (Cincinnati)
    {
        id: 42,
        title: 'Downtown High-End Apartment',
        location: { city: 'Cincinnati', state: 'OH' },
        area: 900,
        beds: 1,
        baths: 1,
        price: 2200,
        rating: 4.0,
        mainImage: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2440473/pexels-photo-2440473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/271775/pexels-photo-271775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 43. Cottage (Asheville)
    {
        id: 43,
        title: 'Cozy Arts & Crafts Cottage',
        location: { city: 'Asheville', state: 'NC' },
        area: 1100,
        beds: 2,
        baths: 1,
        price: 2600,
        rating: 4.5,
        mainImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1488326/pexels-photo-1488326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2775681/pexels-photo-2775681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Cottage'
    },
    // 44. Condo (Honolulu)
    {
        id: 44,
        title: 'Ocean View Condo',
        location: { city: 'Honolulu', state: 'HI' },
        area: 1050,
        beds: 2,
        baths: 2,
        price: 5500,
        rating: 4.8,
        mainImage: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Condo'
    },
    // 45. Townhouse (Omaha)
    {
        id: 45,
        title: 'New Construction Townhouse',
        location: { city: 'Omaha', state: 'NE' },
        area: 1600,
        beds: 3,
        baths: 2.5,
        price: 2500,
        rating: 4.1,
        mainImage: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/279752/pexels-photo-279752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Townhouse'
    },
    // 46. House (Kansas City)
    {
        id: 46,
        title: 'Large Family House with Yard',
        location: { city: 'Kansas City', state: 'MO' },
        area: 3100,
        beds: 5,
        baths: 4,
        price: 4300,
        rating: 4.4,
        mainImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'House'
    },
    // 47. Duplex (Miami)
    {
        id: 47,
        title: 'Modern Duplex Unit in Little Havana',
        location: { city: 'Miami', state: 'FL' },
        area: 1300,
        beds: 2,
        baths: 2,
        price: 3600,
        rating: 4.0,
        mainImage: 'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Duplex'
    },
    // 48. Apartment (San Diego)
    {
        id: 48,
        title: 'Stylish Apartment near Downtown',
        location: { city: 'San Diego', state: 'CA' },
        area: 850,
        beds: 1,
        baths: 1,
        price: 3400,
        rating: 4.5,
        mainImage: 'https://images.pexels.com/photos/271775/pexels-photo-271775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/271775/pexels-photo-271775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2440473/pexels-photo-2440473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Apartment'
    },
    // 49. Cabin (Jackson Hole)
    {
        id: 49,
        title: 'Ski-in/Ski-out Cabin',
        location: { city: 'Jackson Hole', state: 'WY' },
        area: 2100,
        beds: 4,
        baths: 3,
        price: 7800,
        rating: 4.9,
        mainImage: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Cabin'
    },
    // 50. Mansion (Newport)
    {
        id: 50,
        title: 'Historic Coastal Mansion',
        location: { city: 'Newport', state: 'RI' },
        area: 9000,
        beds: 10,
        baths: 11,
        price: 22000,
        rating: 5.0,
        mainImage: 'https://images.pexels.com/photos/1029285/pexels-photo-1029285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        images: [
            'https://images.pexels.com/photos/1029285/pexels-photo-1029285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/6032276/pexels-photo-6032276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        type: 'Mansion'
    }
];

export default properties;