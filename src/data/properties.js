// src/data/properties.js

const properties = [
    // --- ORIGINAL PROPERTIES (Updated with location object and images array) ---
    {
        id: 1,
        title: 'Luxury Apartment in Downtown',
        location: { city: 'New York', state: 'NY' },
        area: 1200,
        beds: 2,
        baths: 2,
        price: 3500,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 2,
        title: 'Spacious Family House',
        location: { city: 'Los Angeles', state: 'CA' },
        area: 2500,
        beds: 4,
        baths: 3,
        price: 5200,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 3,
        title: 'Modern Condo with City View',
        location: { city: 'Chicago', state: 'IL' },
        area: 900,
        beds: 1,
        baths: 1,
        price: 2800,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 4,
        title: 'Charming Townhouse',
        location: { city: 'Miami', state: 'FL' },
        area: 1800,
        beds: 3,
        baths: 2.5,
        price: 4100,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 5,
        title: 'Cozy Studio Apartment',
        location: { city: 'San Francisco', state: 'CA' },
        area: 500,
        beds: 1,
        baths: 1,
        price: 2200,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 6,
        title: 'Countryside Villa',
        location: { city: 'Austin', state: 'TX' },
        area: 3000,
        beds: 5,
        baths: 4,
        price: 6500,
        images: [
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 7,
        title: 'Beachfront Bungalow',
        location: { city: 'Honolulu', state: 'HI' },
        area: 1500,
        beds: 3,
        baths: 2,
        price: 7000,
        images: [
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Bungalow'
    },
    {
        id: 8,
        title: 'Suburban Duplex',
        location: { city: 'Denver', state: 'CO' },
        area: 1600,
        beds: 3,
        baths: 2.5,
        price: 3800,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185025700-f963071871a3?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    
    // --- 30 NEW PROPERTIES (IDs 9-38, Total 38 properties) ---
    {
        id: 9,
        title: 'Industrial Loft with High Ceilings',
        location: { city: 'Seattle', state: 'WA' },
        area: 1100,
        beds: 1,
        baths: 1,
        price: 3100,
        images: [
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560184897-5a0259b1d1f0?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c7c5?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Loft'
    },
    {
        id: 10,
        title: 'Modern Farmhouse on Acreage',
        location: { city: 'Dallas', state: 'TX' },
        area: 4500,
        beds: 5,
        baths: 4.5,
        price: 8500,
        images: [
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 11,
        title: 'Penthouse with Panoramic Views',
        location: { city: 'San Diego', state: 'CA' },
        area: 2200,
        beds: 3,
        baths: 3.5,
        price: 9500,
        images: [
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185025700-f963071871a3?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 12,
        title: 'Historic Brownstone in Brooklyn',
        location: { city: 'New York', state: 'NY' },
        area: 1700,
        beds: 3,
        baths: 2,
        price: 5800,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 13,
        title: 'Lakefront Cabin Retreat',
        location: { city: 'Orlando', state: 'FL' },
        area: 1400,
        beds: 2,
        baths: 1,
        price: 3300,
        images: [
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Cabin'
    },
    {
        id: 14,
        title: 'Contemporary Apartment near Tech Hub',
        location: { city: 'Boston', state: 'MA' },
        area: 850,
        beds: 1,
        baths: 1,
        price: 2900,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 15,
        title: 'Single-Family Home with Garden',
        location: { city: 'Atlanta', state: 'GA' },
        area: 2100,
        beds: 4,
        baths: 3,
        price: 4500,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 16,
        title: 'Downtown Studio with Balcony',
        location: { city: 'Phoenix', state: 'AZ' },
        area: 600,
        beds: 1,
        baths: 1,
        price: 2100,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 17,
        title: 'Luxury Mansion with Pool',
        location: { city: 'Beverly Hills', state: 'CA' },
        area: 6000,
        beds: 7,
        baths: 7,
        price: 15000,
        images: [
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Mansion'
    },
    {
        id: 18,
        title: 'Quaint Cottage in the Hills',
        location: { city: 'San Jose', state: 'CA' },
        area: 1000,
        beds: 2,
        baths: 1,
        price: 2600,
        images: [
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Cottage'
    },
    {
        id: 19,
        title: 'New Build Townhome',
        location: { city: 'Charlotte', state: 'NC' },
        area: 2000,
        beds: 3,
        baths: 3,
        price: 3900,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 20,
        title: 'High-Rise Apartment with Fitness Center',
        location: { city: 'Houston', state: 'TX' },
        area: 750,
        beds: 1,
        baths: 1,
        price: 2500,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e0e?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 21,
        title: 'Gated Community Home',
        location: { city: 'San Antonio', state: 'TX' },
        area: 2800,
        beds: 4,
        baths: 3.5,
        price: 5000,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 22,
        title: 'Modern Duplex near Park',
        location: { city: 'Portland', state: 'OR' },
        area: 1500,
        beds: 3,
        baths: 2,
        price: 3700,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 23,
        title: 'Student Rental near University',
        location: { city: 'Ann Arbor', state: 'MI' },
        area: 1300,
        beds: 4,
        baths: 2,
        price: 4800,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 24,
        title: 'Waterfront Estate',
        location: { city: 'Sarasota', state: 'FL' },
        area: 5500,
        beds: 6,
        baths: 5,
        price: 12000,
        images: [
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 25,
        title: 'Micro-Apartment, Prime Location',
        location: { city: 'New York', state: 'NY' },
        area: 400,
        beds: 0,
        baths: 1,
        price: 1800,
        images: [
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Studio'
    },
    {
        id: 26,
        title: 'South Beach Condo with Ocean View',
        location: { city: 'Miami', state: 'FL' },
        area: 1350,
        beds: 2,
        baths: 2,
        price: 5500,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 27,
        title: 'Modern House with Infinity Pool',
        location: { city: 'Malibu', state: 'CA' },
        area: 4200,
        beds: 5,
        baths: 5,
        price: 14000,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 28,
        title: 'Cozy Townhouse near Downtown',
        location: { city: 'Nashville', state: 'TN' },
        area: 1600,
        beds: 3,
        baths: 2.5,
        price: 3200,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 29,
        title: 'Traditional Suburban Home',
        location: { city: 'Raleigh', state: 'NC' },
        area: 2300,
        beds: 4,
        baths: 3,
        price: 4300,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 30,
        title: 'Bright and Airy Condo',
        location: { city: 'Tampa', state: 'FL' },
        area: 1000,
        beds: 2,
        baths: 2,
        price: 2700,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 31,
        title: 'Sleek Downtown Apartment',
        location: { city: 'Miami', state: 'FL' },
        area: 950,
        beds: 1,
        baths: 1,
        price: 3800,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 32,
        title: 'Large Home with Finished Basement',
        location: { city: 'Philadelphia', state: 'PA' },
        area: 3200,
        beds: 5,
        baths: 4,
        price: 6200,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 33,
        title: 'Brand New Luxury Condo',
        location: { city: 'San Francisco', state: 'CA' },
        area: 1400,
        beds: 2,
        baths: 2,
        price: 4800,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 34,
        title: 'Spacious Townhouse with Patio',
        location: { city: 'San Diego', state: 'CA' },
        area: 1900,
        beds: 3,
        baths: 2.5,
        price: 4400,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 35,
        title: 'Budget-Friendly Studio near Metro',
        location: { city: 'Boston', state: 'MA' },
        area: 550,
        beds: 0,
        baths: 1,
        price: 2000,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Studio'
    },
    {
        id: 36,
        title: 'Luxury Apartment in River North',
        location: { city: 'Chicago', state: 'IL' },
        area: 1100,
        beds: 2,
        baths: 2,
        price: 3600,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 37,
        title: 'Family Home with Large Backyard',
        location: { city: 'Denver', state: 'CO' },
        area: 2600,
        beds: 4,
        baths: 3,
        price: 4900,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 38,
        title: 'Executive Condo near Waterfront',
        location: { city: 'Seattle', state: 'WA' },
        area: 1500,
        beds: 2,
        baths: 2.5,
        price: 4200,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 39,
        title: 'Modern Duplex in Up and Coming Area',
        location: { city: 'Charlotte', state: 'NC' },
        area: 1750,
        beds: 3,
        baths: 2,
        price: 3100,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 40,
        title: 'Spacious House near Golf Course',
        location: { city: 'Phoenix', state: 'AZ' },
        area: 3500,
        beds: 5,
        baths: 4,
        price: 7500,
        images: [
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 41,
        title: 'One-Bedroom Apartment with Great Amenities',
        location: { city: 'Houston', state: 'TX' },
        area: 700,
        beds: 1,
        baths: 1,
        price: 1900,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 42,
        title: 'Modern Condominium in Art District',
        location: { city: 'Miami', state: 'FL' },
        area: 1200,
        beds: 2,
        baths: 2,
        price: 4500,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 43,
        title: 'Huge Estate on Hilltop',
        location: { city: 'Los Angeles', state: 'CA' },
        area: 7000,
        beds: 8,
        baths: 8,
        price: 18000,
        images: [
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Mansion'
    },
    {
        id: 44,
        title: 'Quiet Duplex near River',
        location: { city: 'Portland', state: 'OR' },
        area: 1650,
        beds: 3,
        baths: 2,
        price: 3400,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 45,
        title: 'New Loft in Arts District',
        location: { city: 'Los Angeles', state: 'CA' },
        area: 1300,
        beds: 2,
        baths: 2,
        price: 4600,
        images: [
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560184897-5a0259b1d1f0?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c7c5?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Loft'
    },
    {
        id: 46,
        title: 'Starter Home in Great Neighborhood',
        location: { city: 'Atlanta', state: 'GA' },
        area: 1800,
        beds: 3,
        baths: 2,
        price: 3500,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 47,
        title: 'Sunny Studio in Historic Building',
        location: { city: 'New York', state: 'NY' },
        area: 650,
        beds: 0,
        baths: 1,
        price: 2400,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Studio'
    },
    {
        id: 48,
        title: 'Executive Townhome near Highway',
        location: { city: 'Charlotte', state: 'NC' },
        area: 2100,
        beds: 4,
        baths: 3,
        price: 4100,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 49,
        title: 'One-of-a-Kind Architectural Home',
        location: { city: 'San Francisco', state: 'CA' },
        area: 3800,
        beds: 4,
        baths: 4.5,
        price: 11000,
        images: [
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 50,
        title: 'Affordable Condo in Suburbs',
        location: { city: 'Houston', state: 'TX' },
        area: 800,
        beds: 2,
        baths: 1,
        price: 1800,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 51,
        title: 'Modern Cabin with Mountain View',
        location: { city: 'Denver', state: 'CO' },
        area: 1200,
        beds: 2,
        baths: 1.5,
        price: 3900,
        images: [
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Cabin'
    },
    {
        id: 52,
        title: 'Apartment near Hospital',
        location: { city: 'Boston', state: 'MA' },
        area: 700,
        beds: 1,
        baths: 1,
        price: 2500,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 53,
        title: 'Historic Duplex near Riverfront',
        location: { city: 'Philadelphia', state: 'PA' },
        area: 1450,
        beds: 2,
        baths: 1.5,
        price: 2900,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 54,
        title: 'Ocean View Bungalow',
        location: { city: 'Honolulu', state: 'HI' },
        area: 1600,
        beds: 3,
        baths: 2,
        price: 7500,
        images: [
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Bungalow'
    },
    {
        id: 55,
        title: 'Modern Downtown Loft',
        location: { city: 'San Antonio', state: 'TX' },
        area: 1050,
        beds: 1,
        baths: 1,
        price: 2800,
        images: [
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560184897-5a0259b1d1f0?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c7c5?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Loft'
    },
    {
        id: 56,
        title: 'New Family Home in Quiet Suburb',
        location: { city: 'Atlanta', state: 'GA' },
        area: 2400,
        beds: 4,
        baths: 3.5,
        price: 4800,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 57,
        title: 'Studio with Rooftop Access',
        location: { city: 'Chicago', state: 'IL' },
        area: 450,
        beds: 0,
        baths: 1,
        price: 1900,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Studio'
    },
    {
        id: 58,
        title: 'Charming Townhome with Community Pool',
        location: { city: 'Tampa', state: 'FL' },
        area: 1700,
        beds: 3,
        baths: 2,
        price: 3100,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 59,
        title: 'Bungalow in Trendy Neighborhood',
        location: { city: 'Portland', state: 'OR' },
        area: 1100,
        beds: 2,
        baths: 1,
        price: 2800,
        images: [
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Bungalow'
    },
    {
        id: 60,
        title: 'Executive Apartment in New Tower',
        location: { city: 'New York', state: 'NY' },
        area: 1600,
        beds: 3,
        baths: 2.5,
        price: 6000,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 61,
        title: 'Large Duplex near Shopping Center',
        location: { city: 'Raleigh', state: 'NC' },
        area: 1800,
        beds: 3,
        baths: 2,
        price: 3400,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 62,
        title: 'Luxury Estate with Guest House',
        location: { city: 'Dallas', state: 'TX' },
        area: 5000,
        beds: 6,
        baths: 5.5,
        price: 13000,
        images: [
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Mansion'
    },
    {
        id: 63,
        title: 'Sunny Condo near Beach',
        location: { city: 'San Diego', state: 'CA' },
        area: 980,
        beds: 2,
        baths: 1,
        price: 3300,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 64,
        title: 'Small Cottage in Wooded Area',
        location: { city: 'Orlando', state: 'FL' },
        area: 950,
        beds: 2,
        baths: 1,
        price: 2300,
        images: [
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Cottage'
    },
    {
        id: 65,
        title: 'Three-Bedroom Townhome',
        location: { city: 'Nashville', state: 'TN' },
        area: 1750,
        beds: 3,
        baths: 2.5,
        price: 3500,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 66,
        title: 'Modern Apartment with Pool Access',
        location: { city: 'Phoenix', state: 'AZ' },
        area: 850,
        beds: 1,
        baths: 1,
        price: 2300,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 67,
        title: 'House in Historic District',
        location: { city: 'Philadelphia', state: 'PA' },
        area: 2700,
        beds: 4,
        baths: 3,
        price: 5400,
        images: [
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 68,
        title: 'Bungalow with Large Porch',
        location: { city: 'Portland', state: 'OR' },
        area: 1300,
        beds: 2,
        baths: 1,
        price: 3100,
        images: [
            'https://images.unsplash.com/photo-1444723121822-d2fe904fe5f4?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-bb90a36b567d?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Bungalow'
    },
    {
        id: 69,
        title: 'Loft with Rooftop Patio',
        location: { city: 'Seattle', state: 'WA' },
        area: 1400,
        beds: 2,
        baths: 2,
        price: 4500,
        images: [
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560184897-5a0259b1d1f0?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c7c5?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Loft'
    },
    {
        id: 70,
        title: 'Luxury Townhouse with Garage',
        location: { city: 'Dallas', state: 'TX' },
        area: 2500,
        beds: 4,
        baths: 3.5,
        price: 5200,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 71,
        title: 'Spacious Duplex near Beach',
        location: { city: 'Tampa', state: 'FL' },
        area: 1800,
        beds: 3,
        baths: 2,
        price: 3600,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 72,
        title: 'New Luxury Condo with Balcony',
        location: { city: 'Boston', state: 'MA' },
        area: 1100,
        beds: 2,
        baths: 2,
        price: 3900,
        images: [
            'https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Condo'
    },
    {
        id: 73,
        title: 'Modern House with Large Windows',
        location: { city: 'Atlanta', state: 'GA' },
        area: 2900,
        beds: 5,
        baths: 4,
        price: 5500,
        images: [
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop'
        ],
        type: 'House'
    },
    {
        id: 74,
        title: 'Spacious Studio Apartment',
        location: { city: 'Phoenix', state: 'AZ' },
        area: 600,
        beds: 0,
        baths: 1,
        price: 1800,
        images: [
            'https://images.unsplash.com/photo-1600585152220-908e7455d614?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595521715690-3367f0f63e00?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506441094898-d872b7a90f11?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Studio'
    },
    {
        id: 75,
        title: 'Luxury Townhouse in Quiet Corner',
        location: { city: 'San Jose', state: 'CA' },
        area: 2300,
        beds: 4,
        baths: 3.5,
        price: 5300,
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c696e2e2a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896615-c26685f93973?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Townhouse'
    },
    {
        id: 76,
        title: 'Waterfront Duplex',
        location: { city: 'Honolulu', state: 'HI' },
        area: 2000,
        beds: 4,
        baths: 3,
        price: 8000,
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1574635645601-e23a6509177a?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505881403212-70b5550a1e0b?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114216-ef2540b61be4?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Duplex'
    },
    {
        id: 77,
        title: 'Modern Apartment near Stadium',
        location: { city: 'Houston', state: 'TX' },
        area: 900,
        beds: 1,
        baths: 1,
        price: 2600,
        images: [
            'https://images.unsplash.com/photo-1580582932707-5205da0e7b22?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185121-65b1285038c1?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618220048043-349f87c4f48b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7dfa2ce?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Apartment'
    },
    {
        id: 78,
        title: 'Huge House in Prime Location',
        location: { city: 'Malibu', state: 'CA' },
        area: 4800,
        beds: 6,
        baths: 5,
        price: 16000,
        images: [
            'https://images.unsplash.com/photo-1570129477041-ad6e03c15d7f?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583608225576-2e8812c7553b?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9e1?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912173-3bb406fa70db?q=80&w=2800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
        ],
        type: 'Mansion'
    }
];

export default properties;