/**
 * DATABASE VEICOLI - ityrent.it
 * 
 * ISTRUZIONI PER L'USO:
 * 1. Per aggiungere un nuovo veicolo: aggiungi un nuovo oggetto all'array
 * 2. Per rimuovere un veicolo: imposta "available: false" o rimuovi l'oggetto
 * 3. Per modificare un veicolo: modifica direttamente i valori dell'oggetto
 * 
 * CAMPI DISPONIBILI:
 * - id: numero univoco (incrementale)
 * - brand: marca del veicolo
 * - model: modello
 * - variant: versione/allestimento
 * - category: 'suv', 'berlina', 'city', 'station', 'coupe', 'monovolume'
 * - fuel: 'electric', 'hybrid', 'petrol', 'diesel', 'plug-in'
 * - price: prezzo mensile (numero, senza €)
 * - power: potenza (es: '150cv')
 * - transmission: 'Automatico' o 'Manuale'
 * - seats: numero posti
 * - duration: durata contratto (es: '36 mesi', '48 mesi')
 * - km: chilometri inclusi (es: '45.000 km')
 * - deposit: anticipo (es: '€0', '€2.000')
 * - delivery: tempi consegna (es: 'Pronta consegna', '2-3 settimane')
 * - image: URL immagine principale
 * - badges: array di badge ['electric', 'hybrid', 'new', 'promo', 'plug-in']
 * - available: true/false (se false, non viene mostrato)
 * - promo_text: (opzionale) testo promozionale
 * - old_price: (opzionale) prezzo precedente per mostrare sconto
 */

const vehiclesDatabase = [
    // ============ SUV ============
    {
        id: 1,
        brand: 'Jeep',
        model: 'Avenger',
        variant: '156cv Summit',
        category: 'suv',
        fuel: 'electric',
        price: 379,
        old_price: 429,
        power: '156cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '2-3 settimane',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
        badges: ['electric', 'new', 'promo'],
        available: true,
        promo_text: 'OFFERTA LIMITATA'
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'Q3',
        variant: '35 TFSI S-Tronic Business',
        category: 'suv',
        fuel: 'petrol',
        price: 485,
        power: '150cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '4-5 settimane',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 3,
        brand: 'BMW',
        model: 'X1',
        variant: 'xDrive23i M Sport',
        category: 'suv',
        fuel: 'hybrid',
        price: 545,
        power: '204cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '3-4 settimane',
        image: 'https://images.unsplash.com/photo-1555215858-9dc80cd29e60?w=800&q=80',
        badges: ['hybrid', 'promo'],
        available: true
    },
    {
        id: 4,
        brand: 'Mercedes',
        model: 'GLA',
        variant: '200d Automatic Premium',
        category: 'suv',
        fuel: 'diesel',
        price: 529,
        power: '150cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '5-6 settimane',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 5,
        brand: 'Volkswagen',
        model: 'T-Roc',
        variant: '1.5 TSI Style',
        category: 'suv',
        fuel: 'petrol',
        price: 399,
        power: '150cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: 'Pronta consegna',
        image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
        badges: ['promo'],
        available: true
    },
    {
        id: 6,
        brand: 'Peugeot',
        model: '3008',
        variant: 'Hybrid 225 e-EAT8 Allure',
        category: 'suv',
        fuel: 'hybrid',
        price: 469,
        power: '225cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '3-4 settimane',
        image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
        badges: ['hybrid', 'new'],
        available: true
    },
    {
        id: 7,
        brand: 'Jeep',
        model: 'Compass',
        variant: '4xe Plug-in Hybrid Limited',
        category: 'suv',
        fuel: 'plug-in',
        price: 589,
        old_price: 649,
        power: '240cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '4-5 settimane',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
        badges: ['plug-in', 'promo'],
        available: true
    },
    {
        id: 8,
        brand: 'Audi',
        model: 'Q5',
        variant: '40 TDI quattro Business',
        category: 'suv',
        fuel: 'diesel',
        price: 695,
        power: '204cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '6-7 settimane',
        image: 'https://images.unsplash.com/photo-1606611013016-969c19ba1be3?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 9,
        brand: 'Mercedes',
        model: 'EQA',
        variant: '250+ Premium',
        category: 'suv',
        fuel: 'electric',
        price: 625,
        power: '190cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '3-4 settimane',
        image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80',
        badges: ['electric', 'new'],
        available: true
    },
    {
        id: 10,
        brand: 'BMW',
        model: 'iX1',
        variant: 'xDrive30 M Sport',
        category: 'suv',
        fuel: 'electric',
        price: 679,
        power: '313cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '4-5 settimane',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        badges: ['electric', 'new', 'promo'],
        available: true
    },
    
    // ============ BERLINA ============
    {
        id: 11,
        brand: 'Mercedes',
        model: 'Classe A',
        variant: '180d Automatic Sport',
        category: 'berlina',
        fuel: 'diesel',
        price: 419,
        power: '116cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: 'Pronta consegna',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 12,
        brand: 'Volkswagen',
        model: 'ID.3',
        variant: 'Pro Performance',
        category: 'berlina',
        fuel: 'electric',
        price: 445,
        old_price: 495,
        power: '204cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '2-3 settimane',
        image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&q=80',
        badges: ['electric', 'new', 'promo'],
        available: true
    },
    {
        id: 13,
        brand: 'Audi',
        model: 'A3 Sportback',
        variant: '30 TFSI S-Tronic',
        category: 'berlina',
        fuel: 'petrol',
        price: 389,
        power: '110cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '3-4 settimane',
        image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800&q=80',
        badges: [],
        available: true
    },
    {
        id: 14,
        brand: 'BMW',
        model: 'Serie 3',
        variant: '320d xDrive Business',
        category: 'berlina',
        fuel: 'diesel',
        price: 599,
        power: '190cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '5-6 settimane',
        image: 'https://images.unsplash.com/photo-1555652736-e92021d28a10?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 15,
        brand: 'Tesla',
        model: 'Model 3',
        variant: 'Long Range AWD',
        category: 'berlina',
        fuel: 'electric',
        price: 729,
        power: '440cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '8-10 settimane',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
        badges: ['electric', 'new'],
        available: true
    },
    {
        id: 16,
        brand: 'Alfa Romeo',
        model: 'Giulia',
        variant: '2.0 Turbo Sprint',
        category: 'berlina',
        fuel: 'petrol',
        price: 549,
        power: '200cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '4-5 settimane',
        image: 'https://images.unsplash.com/photo-1609554496796-33e4ba92e2cd?w=800&q=80',
        badges: ['promo'],
        available: true
    },
    
    // ============ CITY CAR ============
    {
        id: 17,
        brand: 'Volkswagen',
        model: 'Polo',
        variant: '1.0 TSI Life DSG',
        category: 'city',
        fuel: 'petrol',
        price: 269,
        old_price: 299,
        power: '95cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '30.000 km',
        deposit: '€0',
        delivery: 'Pronta consegna',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
        badges: ['promo'],
        available: true
    },
    {
        id: 18,
        brand: 'Fiat',
        model: '500',
        variant: 'Elettrica Action',
        category: 'city',
        fuel: 'electric',
        price: 299,
        power: '95cv',
        transmission: 'Automatico',
        seats: 4,
        duration: '36 mesi',
        km: '30.000 km',
        deposit: '€0',
        delivery: 'Pronta consegna',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
        badges: ['electric', 'new'],
        available: true
    },
    {
        id: 19,
        brand: 'Renault',
        model: 'Clio',
        variant: 'TCe Evolution',
        category: 'city',
        fuel: 'petrol',
        price: 245,
        power: '90cv',
        transmission: 'Manuale',
        seats: 5,
        duration: '36 mesi',
        km: '30.000 km',
        deposit: '€0',
        delivery: '2-3 settimane',
        image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&q=80',
        badges: [],
        available: true
    },
    {
        id: 20,
        brand: 'Peugeot',
        model: '208',
        variant: 'PureTech Allure',
        category: 'city',
        fuel: 'petrol',
        price: 279,
        power: '100cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '30.000 km',
        deposit: '€0',
        delivery: '3-4 settimane',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 21,
        brand: 'Toyota',
        model: 'Yaris',
        variant: 'Hybrid Active',
        category: 'city',
        fuel: 'hybrid',
        price: 289,
        power: '116cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '30.000 km',
        deposit: '€0',
        delivery: 'Pronta consegna',
        image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&q=80',
        badges: ['hybrid', 'promo'],
        available: true
    },
    
    // ============ STATION WAGON ============
    {
        id: 22,
        brand: 'BMW',
        model: 'Serie 3 Touring',
        variant: '320d xDrive M Sport',
        category: 'station',
        fuel: 'diesel',
        price: 619,
        power: '190cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '5-6 settimane',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 23,
        brand: 'Mercedes',
        model: 'Classe C SW',
        variant: '220d Automatic Business',
        category: 'station',
        fuel: 'diesel',
        price: 645,
        power: '200cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '6-7 settimane',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        badges: ['new'],
        available: true
    },
    {
        id: 24,
        brand: 'Audi',
        model: 'A4 Avant',
        variant: '35 TDI S-Tronic Business',
        category: 'station',
        fuel: 'diesel',
        price: 579,
        power: '163cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '4-5 settimane',
        image: 'https://images.unsplash.com/photo-1588636142475-a62d56692870?w=800&q=80',
        badges: [],
        available: true
    },
    {
        id: 25,
        brand: 'Volkswagen',
        model: 'Passat Variant',
        variant: '2.0 TDI Business DSG',
        category: 'station',
        fuel: 'diesel',
        price: 489,
        power: '150cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '3-4 settimane',
        image: 'https://images.unsplash.com/photo-1610650874249-8f85c4b8d454?w=800&q=80',
        badges: ['promo'],
        available: true
    },
    
    // ============ VEICOLI COMMERCIALI ============
    {
        id: 26,
        brand: 'Ford',
        model: 'Transit Custom',
        variant: 'Van 280 L1H1',
        category: 'commercial',
        fuel: 'diesel',
        price: 399,
        power: '130cv',
        transmission: 'Manuale',
        seats: 3,
        duration: '48 mesi',
        km: '60.000 km',
        deposit: '€0',
        delivery: '4-5 settimane',
        image: 'https://images.unsplash.com/photo-1570733117311-d990c3816c47?w=800&q=80',
        badges: [],
        available: true
    },
    
    // ============ LUXURY ============
    {
        id: 27,
        brand: 'Porsche',
        model: 'Cayenne',
        variant: 'E-Hybrid',
        category: 'suv',
        fuel: 'plug-in',
        price: 1299,
        power: '462cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '30.000 km',
        deposit: '€5.000',
        delivery: '8-10 settimane',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
        badges: ['plug-in', 'new'],
        available: true
    },
    {
        id: 28,
        brand: 'Land Rover',
        model: 'Range Rover Evoque',
        variant: 'D200 AWD R-Dynamic',
        category: 'suv',
        fuel: 'diesel',
        price: 749,
        power: '204cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '6-7 settimane',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        badges: ['new'],
        available: true
    },
    
    // ============ OFFERTE SPECIALI ============
    {
        id: 29,
        brand: 'Nissan',
        model: 'Leaf',
        variant: 'Acenta 40kWh',
        category: 'berlina',
        fuel: 'electric',
        price: 349,
        old_price: 449,
        power: '150cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: 'Pronta consegna',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
        badges: ['electric', 'promo'],
        available: true,
        promo_text: 'ULTIMA DISPONIBILITÀ'
    },
    {
        id: 30,
        brand: 'Hyundai',
        model: 'Kona',
        variant: 'Electric 64kWh',
        category: 'suv',
        fuel: 'electric',
        price: 419,
        old_price: 499,
        power: '204cv',
        transmission: 'Automatico',
        seats: 5,
        duration: '36 mesi',
        km: '45.000 km',
        deposit: '€0',
        delivery: '2-3 settimane',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
        badges: ['electric', 'promo'],
        available: true,
        promo_text: 'OFFERTA DEL MESE'
    }
];

// Funzione helper per aggiungere un nuovo veicolo (da usare nella console del browser)
function addNewVehicle(vehicle) {
    // Trova l'ID massimo e aggiungi 1
    const maxId = Math.max(...vehiclesDatabase.map(v => v.id));
    vehicle.id = maxId + 1;
    
    // Aggiungi il veicolo al database
    vehiclesDatabase.push(vehicle);
    
    // Se la pagina è già caricata, aggiorna la vista
    if (typeof renderVehicles !== 'undefined') {
        vehicles = vehiclesDatabase;
        currentVehicles = [...vehicles];
        renderVehicles(currentVehicles);
        updateFilterCounts();
    }
    
    console.log(`Veicolo aggiunto con ID: ${vehicle.id}`);
    return vehicle.id;
}

// Funzione helper per rimuovere un veicolo (da usare nella console del browser)
function removeVehicle(vehicleId) {
    const index = vehiclesDatabase.findIndex(v => v.id === vehicleId);
    if (index > -1) {
        const removed = vehiclesDatabase.splice(index, 1)[0];
        
        // Se la pagina è già caricata, aggiorna la vista
        if (typeof renderVehicles !== 'undefined') {
            vehicles = vehiclesDatabase;
            currentVehicles = [...vehicles];
            renderVehicles(currentVehicles);
            updateFilterCounts();
        }
        
        console.log(`Veicolo rimosso: ${removed.brand} ${removed.model}`);
        return true;
    }
    console.log(`Veicolo con ID ${vehicleId} non trovato`);
    return false;
}

// Funzione helper per marcare un veicolo come non disponibile
function setVehicleAvailability(vehicleId, isAvailable) {
    const vehicle = vehiclesDatabase.find(v => v.id === vehicleId);
    if (vehicle) {
        vehicle.available = isAvailable;
        
        // Se la pagina è già caricata, aggiorna la vista
        if (typeof renderVehicles !== 'undefined') {
            vehicles = vehiclesDatabase;
            currentVehicles = [...vehicles.filter(v => v.available)];
            renderVehicles(currentVehicles);
            updateFilterCounts();
        }
        
        console.log(`Veicolo ${vehicle.brand} ${vehicle.model} - disponibilità: ${isAvailable}`);
        return true;
    }
    console.log(`Veicolo con ID ${vehicleId} non trovato`);
    return false;
}

// Esporta il database per l'uso nel file HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vehiclesDatabase;
      }
