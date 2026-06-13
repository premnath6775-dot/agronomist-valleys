export const INVENTORY = [
  {
    category: 'Lowland Vegetable',
    items: [
      {
        subCategory: 'Leafy Greens',
        icon: 'leaf',
        image: 'https://images.unsplash.com/photo-1622484211148-52269a0d33e1?auto=format&fit=crop&w=800&q=80',
        items: [
          { name: 'Bayam Hijau', enName: 'Green Spinach', moq: '1 KG', image: '/images/bayam-hijau.png', price: 'RM 5.50' },
          { name: 'Bayam Merah', enName: 'Red Spinach', moq: '1 KG', image: '/images/bayam-merah.png', price: 'RM 6.50' },
          { name: 'Kangkung', enName: 'Water Spinach', moq: '1 KG', image: '/images/kangkung.png', price: 'RM 4.00' },
          { name: 'Pucuk Manis', enName: 'Sweet Leaf', moq: '1 KG', image: '/images/pucuk-manis.png', price: 'RM 6.50' },
          { name: 'Sawi Hijau', enName: 'Choy Sum', moq: '1 KG', image: '/images/sawi-hijau.png', price: 'RM 4.00' },
          { name: 'Kailan', enName: 'Chinese Broccoli', moq: '1 KG', image: '/images/kailan.png' },
          { name: 'Pucuk Paku', enName: 'Fiddlehead Fern', moq: '1 KG', image: '/images/pucuk-paku.png', price: 'RM 7.00' }
        ]
      },
      {
        subCategory: 'Herb & Aromatics',
        icon: 'flower',
        image: '/items/daun_asam.jpg',
        items: [
          { name: 'Daun Asam', enName: 'Tamarind Leaves', moq: '5 KG', image: '/items/daun_asam.jpg', price: 'RM 14.50' },
          { name: 'Daun Kesum - 1 KG', enName: 'Vietnamese Coriander - 1 KG', moq: '1 KG', image: '/items/daun_kesum.jpg', price: 'RM 7.00' },
          { name: 'Daun kesum - 10 KG', enName: 'Vietnamese Coriander - 10 KG', moq: '10 KG', image: '/items/daun_kesum.jpg', price: 'RM 60.00' },
          { name: 'Daun pandan - 1 KG', enName: 'Pandan Leaves - 1 KG', moq: '1 KG', image: '/items/daun_pandan.jpeg', price: 'RM 5.50' },
          { name: 'Daun Pandan - 1 IKAT', enName: 'Pandan Leaves - 1 BUNCH', moq: '1 IKAT', image: '/items/daun_pandan.jpeg', price: 'RM 23.50' },
          { name: 'Daun Pisang Se-ikat', enName: 'Banana Leaves - 1 Bunch', moq: 'IKAT', image: '/items/daun_pisang.jpg', price: 'RM 3.00' },
          { name: 'Daun Kunyit Kampung', enName: 'Turmeric Leaves', moq: '1 KG', image: '/items/daun_kunyit.jpg', price: 'RM 14.00' },
          { name: 'Daun Kari JOHOR', enName: 'Curry Leaves JOHOR', moq: '1 KG', image: '/items/daun_kari.jpg', price: 'RM 7.00' },
          { name: 'Bunga kantan Se-ikat KAMPUNG', enName: 'Torch Ginger Flower - 1 Bunch', moq: 'SE-IKAT', image: '/items/bunga_kantan.jpg', price: 'RM 16.00' }
        ]
      },
      {
        subCategory: 'Root & Underground',
        icon: 'carrot',
        image: '/items/kunyit_hidup.jpg',
        items: [
          { name: 'Kunyit hidup - 1 KG', enName: 'Fresh Turmeric - 1 KG', moq: '1 KG', image: '/items/kunyit_hidup.jpg', price: 'RM 7.00' },
          { name: 'Kunyit hidup 10Kg (Size Kecil)', enName: 'Fresh Turmeric 10KG (Small)', moq: '10 KG', image: '/items/kunyit_hidup.jpg', price: 'RM 60.00' },
          { name: 'Lengkuas - 10KG', enName: 'Galangal - 10KG', moq: '10 KG', image: '/items/lengkuas.jpg', price: 'RM 52.00' },
          { name: 'Lengkuas - 1KG', enName: 'Galangal - 1KG', moq: '1 KG', image: '/items/lengkuas.jpg', price: 'RM 6.50' }
        ]
      },
      {
        subCategory: 'Gourds & Squash',
        icon: 'sprout',
        image: '/items/labu_air.jpg',
        items: [
          { name: 'Labu Air', enName: 'Bottle Gourd', moq: '1 KG', image: '/items/labu_air.jpg', price: 'RM 4.00' },
          { name: 'Labu Kuning', enName: 'Pumpkin', moq: '1 KG', image: '/items/labu_kuning.jpg', price: 'RM 2.80' },
          { name: 'Labu Kundur', enName: 'Winter Melon', moq: '1 KG', image: '/items/labu_kundur.jpg', price: 'RM 6.00' },
          { name: 'Patola', enName: 'Luffa', moq: '1 KG', image: '/items/patola.jpg', price: 'RM 3.50' },
          { name: 'Patola Ular', enName: 'Snake Gourd', moq: '1 KG', image: '/items/patola_ular.jpg', price: 'RM 3.00' },
          { name: 'Peria Besar', enName: 'Bitter Gourd (Large)', moq: '1 KG', image: '/items/peria_besar.jpg', price: 'RM 5.00' },
          { name: 'Peria Katak', enName: 'Bitter Gourd (Small)', moq: '1 KG', image: '/items/peria_katak.jpg', price: 'RM 4.50' },
          { name: 'Timun Hijau', enName: 'Green Cucumber', moq: '1 KG', image: '/items/timun_hijau.jpg', price: 'RM 5.50' },
          { name: 'Timun Bulu', enName: 'Hairy Cucumber', moq: '1 KG', image: '/items/timun_bulu.jpg', price: 'RM' }
        ]
      },
      {
        subCategory: 'Peppers & Chilis',
        icon: 'flame',
        image: '/items/cili_hijau.jpg',
        items: [
          { name: 'Cili hijau', enName: 'Green Chilli', moq: '1 KG', image: '/items/cili_hijau.jpg', price: 'X' },
          { name: 'Cili Merah', enName: 'Red Chilli', moq: '1 KG', image: '/items/cili_merah.jpeg', price: 'X' }
        ]
      },
      {
        subCategory: 'Beans, Pods & Eggplants',
        icon: 'bean',
        image: '/items/kacang_botol.jpg',
        items: [
          { name: 'Kacang botol', enName: 'Winged Bean', moq: '1 KG', image: '/items/kacang_botol.jpg' },
          { name: 'Kacang Panjang', enName: 'Long Bean', moq: '1 KG', image: '/items/kacang_panjang.jpg', price: 'RM 6.00' },
          { name: 'Bendi', enName: 'Okra', moq: '1 KG', image: '/items/bendi.jpg', price: 'RM 3.50' },
          { name: 'Terung Panjang', enName: 'Long Eggplant', moq: '1 KG', image: '/items/terung_panjang.jpg', price: 'RM 7.00' },
          { name: 'Terung Bulat Hitam', enName: 'Round Black Eggplant', moq: '1 KG', image: '/items/terung_bulat_hitam.jpg', price: 'RM 7.00' },
          { name: 'Terung Mini', enName: 'Mini Eggplant', moq: '1 KG', image: '/items/terung_mini.jpg', price: 'RM 6.50' },
          { name: 'Petai 800 AAA', enName: 'Stink Bean 800 AAA', moq: '800G', image: '/items/petai_800_AAA.jpg', price: 'RM 30.00' }
        ]
      },
      {
        subCategory: 'Citrus',
        icon: 'citrus',
        image: '/items/lime_juice.jpg',
        items: [
          { name: 'Lime Juice 1pack', enName: 'Jus Limau 1pack', moq: '6 BOTTLE', image: '/items/lime_juice.jpg', price: 'RM 18.50' },
          { name: 'Limau Kasturi', enName: 'Calamansi', moq: '1 KG', image: '/items/limau_kasturi.jpg', price: 'RM 7.00' },
          { name: 'Limau Nipis', enName: 'Lime', moq: '1 KG', image: '/items/limau_nipis.jpg', price: 'X' },
          { name: 'Limau Purut', enName: 'Kaffir Lime', moq: '1 KG', image: '/items/limau_purut.jpeg', price: 'RM 8.00' }
        ]
      }
    ]
  },
  {
    category: 'Import Vegetable',
    items: [
      {
        subCategory: 'China',
        countryCode: 'cn',
        image: '/items/kubis_bulat_china.jpg',
        items: [
          { name: 'KUBIS BULAT CHINA', enName: 'Round Cabbage', moq: '20KG', image: '/items/kubis_bulat_china.jpg', price: 'RM 24.50' },
          { name: 'KUBIS PANJANG', enName: 'Long Cabbage', moq: '10KG', image: '/items/kubis_panjang.jpg', price: 'RM 22.00' },
          { name: 'Broccoli KUNMING', enName: 'Broccoli KUNMING', moq: '7KG', image: '/items/broccoli_kunming.jpg', price: 'RM 62.00' },
          { name: 'Cauliflower(LZ )', enName: 'Bunga Kubis (LZ)', moq: '12kg', image: '/items/cauliflower.jpg', price: 'RM 98.00' },
          { name: 'Beijing', enName: 'Beijing Cabbage', moq: '10kg', image: '/items/beijing_cabbage.jpg', price: 'RM 36.00' },
          { name: 'Halia CHINA (4KG)', enName: 'Ginger CHINA (4KG)', moq: '4 KG', image: '/items/halia_china.jpg', price: 'RM 18.00' },
          { name: 'Halia CHINA (8KG)', enName: 'Ginger CHINA (8KG)', moq: '8 KG', image: '/items/halia_china.jpg', price: 'RM 32.00' },
          { name: 'Kobis Merah (CHINA)', enName: 'Red Cabbage (CHINA)', moq: '10 KG', image: '/items/kobis_merah.jpg', price: 'RM 26.00' },
          { name: 'Carrot', enName: 'Lobak Merah', moq: '4.5 KG', image: '/items/lobak_merah.jpg', price: 'RM 7.50' },
          { name: 'Batang Sup CHINA (CELERY)', enName: 'Celery CHINA', moq: '10 KG', image: '/items/batang_sup_china.jpg', price: 'RM 58.00' },
          { name: 'Bawang Putih - Guni', enName: 'Garlic - Sack', moq: '5 KG', image: '/items/bawang_putih.jpg', price: 'RM 28.50' },
          { name: 'Bawang Putih (KOPEK)', enName: 'Peeled Garlic', moq: '9 KG', image: '/items/bawang_putih.jpg', price: 'RM 60.00' },
          { name: 'Cili Merah (CHINA)', enName: 'Red Chilli (CHINA)', moq: '5 KG', image: '/items/cili_merah.jpeg', price: 'RM 24.00' },
          { name: 'Ubi Kentang (CHINA) - 3KG', enName: 'Potato (CHINA) - 3KG', moq: '3 KG', image: '/items/ubi_kentang.jpg', price: 'RM 5.50' },
          { name: 'Ubi kentang CHINA - 6KG', enName: 'Potato (CHINA) - 6KG', moq: '6 KG', image: '/items/ubi_kentang.jpg', price: 'RM 8.50' },
          { name: 'Ubi Kentang CHINA - 8KG', enName: 'Potato (CHINA) - 8KG', moq: '8 KG', image: '/items/ubi_kentang.jpg', price: 'X' },
          { name: 'Limau Nipis (AAA)', enName: 'Lime (AAA)', moq: '4 KG', image: '/items/limau_nipis.jpg', price: 'RM 26.00' },
          { name: 'Kacang Manis', enName: 'Sweet Peas', moq: '30 PKT', image: '/items/kacang_manis.jpg', price: 'RM 55.00' },
          { name: 'Beetroot 10kg', enName: 'Ubi Bit Merah 10kg', moq: '10 KG', image: '/items/beetroot.jpg', price: 'RM 55.00' },
          { name: 'Keladi Mini CHINA', enName: 'Mini Taro CHINA', moq: '4.5KG', image: '/items/keladi_mini_china.jpg', price: 'RM 16.00' },
          { name: 'Ketumbar China - 12KG', enName: 'Coriander China - 12KG', moq: '12 KG', image: '/items/ketumbar_china.jpg', price: 'X' },
          { name: 'Ketumbar China - 1KG', enName: 'Coriander China - 1KG', moq: '1 KG', image: '/items/ketumbar_china.jpg', price: 'X' },
          { name: 'Bawang CHINA', enName: 'Onion CHINA', moq: '5KG', image: '/items/bawang_china.jpg', price: 'RM 7.50' }
        ]
      },
      {
        subCategory: 'Vietnam',
        countryCode: 'vn',
        image: '/items/api_merah_vietnam.jpg',
        items: [
          { name: 'Api Merah - Viethnam', enName: 'Red Birds Eye Chilli - Vietnam', moq: '1 kg', image: '/items/api_merah_vietnam.jpg', price: 'RM 8.50' },
          { name: 'Api Merah (VIETNAM) - 5KG', enName: 'Red Birds Eye Chilli (VIETNAM) - 5KG', moq: '5 KG', image: '/items/api_merah_vietnam.jpg', price: 'RM 32.00' }
        ]
      },
      {
        subCategory: 'Thailand',
        countryCode: 'th',
        image: '/items/halia_muda.jpg',
        items: [
          { name: 'Halia MUDA (Thailand)', enName: 'Young Ginger (Thailand)', moq: '9 KG', image: '/items/halia_muda.jpg', price: 'RM 50.00' },
          { name: 'Cili Hijau (THAILAND)', enName: 'Green Chilli (THAILAND)', moq: '7 KG', image: '/items/cili_hijau.jpg', price: 'X' },
          { name: 'Api kampung (THAILAND)', enName: 'Village Birds Eye Chilli (THAILAND)', moq: '8 KG', image: '/items/api_kampung.jpg', price: 'RM 100.00' },
          { name: 'Api Hijau (THAILAND)', enName: 'Green Birds Eye Chilli (THAILAND)', moq: '7 KG', image: '/items/api_hijau.jpg', price: 'RM 50.00' },
          { name: 'Ketumbar Thailand - 12KG', enName: 'Coriander Thailand - 12KG', moq: '12 KG', image: '/items/ketumbar_thailand.jpg', price: 'RM 163.00' },
          { name: 'Ketumbar Thailand - 1KG', enName: 'Coriander Thailand - 1KG', moq: '1 KG', image: '/items/ketumbar_thailand.jpg', price: 'RM 16.00' },
          { name: 'Daun Salad', enName: 'Lettuce', moq: '10 KG', image: '/items/daun_salad.jpg', price: 'X' },
          { name: 'Daun Limau 1box', enName: 'Kaffir Lime Leaves 1box', moq: '8 BAG', image: '/items/daun_limau.jpg', price: 'RM 78.00' },
          { name: 'Daun Limau (bag)', enName: 'Kaffir Lime Leaves (bag)', moq: 'BAG', image: '/items/daun_limau.jpg', price: 'RM 11.00' },
          { name: 'Pegaga 10KG', enName: 'Pennywort 10KG', moq: '10 KG', image: '/items/pegaga.jpg', price: 'RM 110.00' },
          { name: 'Pegaga (1bag)', enName: 'Pennywort (1bag)', moq: '2KG', image: '/items/pegaga.jpg', price: 'RM 23.00' },
          { name: 'Serai ( THAILAND )', enName: 'Lemongrass (THAILAND)', moq: '5 KG', image: '/items/serai.jpg', price: 'RM 15.50' },
          { name: 'Rebung Kuning', enName: 'Yellow Bamboo Shoots', moq: '10 KG', image: '/items/rebung_kuning.jpg', price: 'RM 75.00' },
          { name: 'Rebung Halus', enName: 'Fine Bamboo Shoots', moq: '10 KG', image: '/items/rebung_halus.jpeg', price: 'RM 75.00' },
          { name: 'Rebung Putih', enName: 'White Bamboo Shoots', moq: '10 KG', image: '/items/rebung_putih.jpg', price: 'RM 45.50' },
          { name: 'Halia Thai White Box', enName: 'Ginger Thai White Box', moq: '10 KG', image: '/items/halia_thai_white.jpg', price: 'RM 38.50' },
          { name: 'Halia Bag (THAILAND)', enName: 'Ginger Bag (THAILAND)', moq: '9 KG', image: '/images/halia-bag-thailand.png', price: 'RM 22.50' },
          { name: 'Keladi ( Medium )', enName: 'Taro (Medium)', moq: '10 KG', image: '/items/keladi.jpg', price: 'RM 50.00' },
          { name: 'keladi', enName: 'Taro', moq: '10KG', image: '/items/keladi.jpg', price: 'RM 55.00' },
          { name: 'Mangga BIG', enName: 'Mango BIG', moq: '10 KG', image: '/items/mangga_big.jpg', price: 'RM 32.00' },
          { name: 'Timun Baby', enName: 'Baby Cucumber', moq: '10 KG', image: '/items/timun_baby.jpg', price: 'RM 55.00' },
          { name: 'Terung Putih - Besar', enName: 'White Eggplant - Large', moq: 'COMMERCIAL PKG', image: '/items/terung_putih_besar.jpg', price: 'RM 30.00' },
          { name: 'Terung Putih -Kecil', enName: 'White Eggplant - Small', moq: 'COMMERCIAL PKG', image: '/items/terung_putih_besar.jpg', price: 'RM 40.00' },
          { name: 'Terung pipit', enName: 'Pea Eggplant', moq: '1 KG', image: '/items/terung_pipit.jpg', price: 'X' },
          { name: 'Terung (Pink)', enName: 'Eggplant (Pink)', moq: '5 KG', image: '/items/terung_bulat_hitam.jpg', price: 'RM 45.00' },
          { name: 'Kunci (TONGGKATT)', enName: 'Fingerroot (TONGGKAT)', moq: '5KG', image: '/items/kunci.jpg', price: 'RM 35.00' },
          { name: 'Limau Purut', enName: 'Kaffir Lime', moq: '5 KG', image: '/items/limau_purut.jpeg', price: 'RM 30.00' },
          { name: 'Jagung Manis', enName: 'Sweet Corn', moq: 'COMMERCIAL PKG', image: '/items/jagung_manis.jpg', price: 'RM 17.50' },
          { name: 'Jagung Plate bag', enName: 'Sweet Corn Plate bag', moq: 'COMMERCIAL PKG', image: '/images/jagung-plate-bag.png', price: 'RM 20.00' },
          { name: 'Jagung Plate Per box', enName: 'Sweet Corn Plate Per box', moq: 'BOX', image: '/images/jagung-plate-per-box.png', price: 'RM 190.00' },
          { name: 'Jagung Bag', enName: 'Sweet Corn Bag', moq: '5KG', image: '/images/jagung-bag.png', price: 'RM 34.50' },
          { name: 'Daun Isaii per', enName: 'Isaii Leaves per', moq: '1/2KG', image: '/images/daun-isaii-per.png', price: 'RM 6.00' },
          { name: 'Ubi Keledek MERAH', enName: 'Red Sweet Potato', moq: '10 KG', image: '/items/ubi_keledek_merah.jpg', price: 'RM 32.50' },
          { name: 'Ubi Keledek OREN', enName: 'Orange Sweet Potato', moq: '10 KG', image: '/items/ubi_keledek_oren.jpg', price: 'RM 32.00' },
          { name: 'Kacang Kayu 10kg', enName: 'Pigeon Pea 10kg', moq: '10 KG', image: '/items/kacang_kayu.jpg', price: 'RM 52.00' },
          { name: 'Bawang Merah Kopek', enName: 'Peeled Red Onion', moq: '1 KG', image: '/items/bawang_merah_kopek.jpg', price: 'RM 3.60' },
          { name: 'Bawang Siam', enName: 'Thai Onion', moq: '10 KG', image: '/items/bawang_siam.jpg', price: 'RM 65.00' },
          { name: 'Bawang Ikat', enName: 'Bunched Onion', moq: '10KG', image: '/items/bawang_ikat.jpg', price: 'RM 65.00' }
        ]
      },
      {
        subCategory: 'Egypt',
        countryCode: 'eg',
        image: '/items/lemon_egypt.jpg',
        items: [
          { name: 'Lemon (EGYPT)', enName: 'Lemon (EGYPT)', moq: '100 pcs', image: '/items/lemon_egypt.jpg', price: 'RM 130.00' }
        ]
      },
      {
        subCategory: 'India',
        countryCode: 'in',
        image: '/items/bawang_ros_india.jpg',
        items: [
          { name: 'Bawang Ros (INDIA)', enName: 'Rose Onion (INDIA)', moq: '3.5KG', image: '/items/bawang_ros_india.jpg', price: 'RM 9.00' },
          { name: 'Bawang India Besar', enName: 'Large Indian Onion', moq: '8 KG', image: '/items/bawang_india_besar.jpg', price: 'RM 12.50' }
        ]
      },
      {
        subCategory: 'Myanmar',
        countryCode: 'mm',
        image: '/items/bawang_myanmar.jpg',
        items: [
          { name: 'Bawang Myanmar', enName: 'Myanmar Onion', moq: '7 KG', image: '/items/bawang_myanmar.jpg', price: 'X' }
        ]
      },
      {
        subCategory: 'Pakistan',
        countryCode: 'pk',
        image: '/items/bawang_pakistan.jpg',
        items: [
          { name: 'Bawang Pakistan', enName: 'Pakistan Onion', moq: '6 KG', image: '/items/bawang_pakistan.jpg', price: 'X' }
        ]
      },
      {
        subCategory: 'Holland',
        countryCode: 'nl',
        image: '/items/bawang_holland.jpg',
        items: [
          { name: 'Bawang Holland', enName: 'Holland Onion', moq: '10KG', image: '/items/bawang_holland.jpg', price: 'RM 13.50' }
        ]
      }
    ]
  },
  {
    category: 'Cameron Highland Vegetable',
    items: [
      {
        subCategory: 'Leaf & Herb',
        icon: 'leaf',
        image: '/items/pudina.jpg',
        items: [
          { name: 'Pudina', enName: 'Mint Leaves', moq: '1KG', image: '/items/pudina.jpg', price: 'RM 7.00' },
          { name: 'Siew Pak choy', enName: 'Siew Pak Choy', moq: '1 KG', image: '/items/siew_pak_choy.jpg', price: 'RM 5.50' },
          { name: 'Salad 5kg', enName: 'Lettuce 5kg', moq: '5 KG', image: '/items/salad.jpg', price: 'RM 87.00' },
          { name: 'Sawi Putih 1kg', enName: 'White Mustard Greens 1kg', moq: '1 KG', image: '/items/sawi.jpg', price: 'RM 4.60' },
          { name: 'Kailan', enName: 'Chinese Broccoli', moq: '1 KG', image: '/images/kailan.png', price: 'RM 9.50' },
          { name: 'Daun Sup', enName: 'Celery Leaves', moq: '1 KG', image: '/items/daun_sup.jpg', price: 'RM 13.00' },
          { name: 'Daun Bawang', enName: 'Spring Onion', moq: '1 KG', image: '/items/daun_bawang.jpg', price: 'RM 6.00' },
          { name: 'Sawi', enName: 'Mustard Greens', moq: '1 KG', image: '/items/sawi.jpg', price: 'RM 6.00' },
          { name: 'Salad King', enName: 'Lettuce King', moq: '1KG', image: '/items/salad_king.jpg', price: 'RM 4.00' },
          { name: 'Yaun Batang', enName: 'Yaun Batang', moq: '1 KG', image: '/images/yaun-batang.png', price: 'RM 4.00' },
          { name: 'Sawi Putih', enName: 'White Mustard Greens', moq: '1 KG', image: '/items/sawi_putih.png' }
        ]
      },
      {
        subCategory: 'Root / Underground',
        icon: 'carrot',
        image: '/items/lobak_putih.jpg',
        items: [
          { name: 'Lobak Putih', enName: 'White Radish', moq: '1 KG', image: '/items/lobak_putih.jpg', price: 'RM 4.00' }
        ]
      },
      {
        subCategory: 'Fruit',
        icon: 'apple',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
        items: [
          { name: 'Tomato Cameron Highland XL', enName: 'Tomato Cameron Highland XL', moq: '10 kG', image: '/items/tomato_cameron_xl.jpg', price: 'RM 50.00' },
          { name: 'Capsicum Kuning', enName: 'Yellow Capsicum', moq: '1 KG', image: '/items/capsicum_kuning.jpg', price: 'RM 8.50' },
          { name: 'Capsicum Hijau', enName: 'Green Capsicum', moq: '1 KG', image: '/items/capsicum_hijau.jpg', price: 'RM 8.50' },
          { name: 'Capsicum Merah', enName: 'Red Capsicum', moq: '1 KG', image: '/items/capsicum_merah.jpg', price: 'RM 8.50' },
          { name: 'Cili Hijau (A)', enName: 'Green Chilli (A)', moq: '1 KG', image: '/items/cili_hijau.jpg', price: 'RM 8.00' },
          { name: 'Zukini Yellow', enName: 'Yellow Zucchini', moq: '1 KG', image: '/items/zukini_yellow.jpg', price: 'RM 5.00' },
          { name: 'Zukini Green', enName: 'Green Zucchini', moq: '1 KG', image: '/items/zukini_green.jpg', price: 'RM 5.00' },
          { name: 'Tomato Cherry', enName: 'Cherry Tomato', moq: '1 KG', image: '/items/tomato_cherry.jpg', price: 'RM 8.00' },
          { name: 'Buncis', enName: 'French Beans', moq: '1 KG', image: '/items/buncis.jpg', price: 'RM 13.00' },
          { name: 'Timun Jepun', enName: 'Japanese Cucumber', moq: '1 KG', image: '/items/timun_jepun.jpg', price: 'RM 7.00' },
          { name: 'Terung Mutiara', enName: 'Pearl Eggplant', moq: '1 KG', image: '/items/terung_mutiara.jpg', price: 'x' },
          { name: 'Terung Panjang', enName: 'Long Eggplant', moq: '1 KG', image: '/items/terung_panjang.jpg', price: 'RM 8.00' }
        ]
      }
    ]
  },
  {
    category: 'Fruits',
    items: [
      {
        subCategory: 'Anggur',
        icon: 'grape',
        image: '/items/anggur_merah.jpg',
        items: [
          { name: 'Anggur Merah 500g', enName: 'Red Grapes 500g', moq: '1 CTN', image: '/items/anggur_merah.jpg', price: 'RM 85.00' },
          { name: 'Anggur Hijau 500g', enName: 'Green Grapes 500g', moq: '1 CTN', image: '/items/anggur_hijau.jpg', price: 'RM 80.00' },
          { name: 'Anggur Hitam 500g', enName: 'Black Grapes 500g', moq: '1 CTN', image: '/items/anggur_hitam.jpg', price: 'RM 86.00' }
        ]
      },
      {
        subCategory: 'Avocado',
        icon: 'sprout',
        image: '/items/avocado.jpg',
        items: [
          { name: 'Avocado 26 pcs', enName: 'Avocado 26 pcs', moq: '1 CTN', image: '/items/avocado.jpg', price: 'RM 180.00' }
        ]
      },
      {
        subCategory: 'Orange',
        icon: 'citrus',
        image: '/items/baby_mandarin_orange.jpg',
        items: [
          { name: 'Baby Mandarin Orange 11KG', enName: 'Limau Mandarin Bayi 11KG', moq: '11 KG', image: '/items/baby_mandarin_orange.jpg', price: 'RM 80.00' },
          { name: 'Navel Orange 100 , 72 ,88', enName: 'Oren Navel 100, 72, 88', moq: '1 CTN', image: '/items/navel_orange.jpg', price: 'RM 105.00' },
          { name: 'Valencia Orange 88,100,72,', enName: 'Oren Valencia 88, 100, 72', moq: '1 CTN', image: '/items/valencia_orange.jpg', price: 'RM 115.00' }
        ]
      },
      {
        subCategory: 'Pear',
        icon: 'apple',
        image: '/items/century_pear.jpg',
        items: [
          { name: 'Century Pear 60 PCS', enName: 'Pir Century 60 PCS', moq: '1 CTN', image: '/items/century_pear.jpg', price: 'RM 80.00' },
          { name: 'Pear Hijau 70 ,60 ,96', enName: 'Green Pear 70, 60, 96', moq: '1 CTN', image: '/items/pear_hijau.jpg', price: 'RM 85.00' }
        ]
      },
      {
        subCategory: 'Dragon Fruits',
        icon: 'flame',
        image: '/items/dragon_fruit.jpg',
        items: [
          { name: 'Dragon Fruits XL', enName: 'Buah Naga XL', moq: '15 kG', image: '/items/dragon_fruit.jpg', price: 'RM 95.00' }
        ]
      },
      {
        subCategory: 'Epal',
        icon: 'apple',
        image: '/items/epal_hijau.jpg',
        items: [
          { name: 'Epal Hijau 135/150/198', enName: 'Green Apple 135/150/198', moq: '1 CTN', image: '/items/epal_hijau.jpg', price: 'RM 155.00' },
          { name: 'Fuji Epal 80 ,88 ,', enName: 'Fuji Apple 80, 88', moq: '1 CTN', image: '/items/fuji_epal.jpg', price: 'RM 115.00' },
          { name: 'Fuji Epal 150,138,125,113', enName: 'Fuji Apple 150, 138, 125, 113', moq: '1 CTN', image: '/items/fuji_epal.jpg', price: 'RM 115.00' },
          { name: 'Apple Gala 180 , 216', enName: 'Epal Gala 180, 216', moq: '1 CTN', image: '/items/apple_gala.jpg', price: 'RM 155.00' }
        ]
      },
      {
        subCategory: 'Jambu Batu',
        icon: 'apple',
        image: '/items/jambu_batu.jpg',
        items: [
          { name: 'Jambu Batu', enName: 'Guava', moq: '1 KG', image: '/items/jambu_batu.jpg', price: 'RM 6.00' }
        ]
      },
      {
        subCategory: 'Honeydew',
        icon: 'apple',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
        items: [
          { name: 'Honeydew', enName: 'Tembikai Susu', moq: '1 KG', image: '/items/tembikai_kuning.jpg', price: 'RM 4.00' }
        ]
      },
      {
        subCategory: 'Mangga',
        icon: 'banana',
        image: '/items/mangga_gold.jpg',
        items: [
          { name: 'Mangga Gold', enName: 'Gold Mango', moq: '18KG', image: '/items/mangga_gold.jpg', price: 'RM 85.00' }
        ]
      },
      {
        subCategory: 'Mata Kucing',
        icon: 'cherry',
        image: '/items/mata_kucing.jpg',
        items: [
          { name: 'Mata Kucing', enName: 'Longan', moq: '18 KG', image: '/items/mata_kucing.jpg', price: 'RM 125.00' }
        ]
      },
      {
        subCategory: 'Nanas',
        icon: 'flower',
        image: '/items/nanas_josa.jpg',
        items: [
          { name: 'Nanas Josa', enName: 'Pineapple Josa', moq: '1 PCS', image: '/items/nanas_josa.jpg', price: 'RM 5.00' }
        ]
      },
      {
        subCategory: 'Pisang',
        icon: 'banana',
        image: '/items/pisang_montel.jpg',
        items: [
          { name: 'Pisang Montel', enName: 'Montel Banana', moq: '12 KG', image: '/items/pisang_montel.jpg', price: 'RM 55.00' }
        ]
      },
      {
        subCategory: 'Pomegranate',
        icon: 'cherry',
        image: '/items/pomegranate.jpg',
        items: [
          { name: 'Pomegranate', enName: 'Delima', moq: '24 PCS', image: '/items/pomegranate.jpg', price: 'RM 75.00' }
        ]
      },
      {
        subCategory: 'Rambutan',
        icon: 'cherry',
        image: '/items/rambutan.jpg',
        items: [
          { name: 'Rambutan', enName: 'Rambutan', moq: '13KG', image: '/items/rambutan.jpg', price: 'x' }
        ]
      },
      {
        subCategory: 'Tembikai',
        icon: 'apple',
        image: '/items/tembikai_kuning.jpg',
        items: [
          { name: 'Tembikai Kuning', enName: 'Yellow Watermelon', moq: '1 KG', image: '/items/tembikai_kuning.jpg', price: 'RM 1.90' },
          { name: 'Tembikai Merah', enName: 'Red Watermelon', moq: '1 KG', image: '/items/tembikai_merah.jpg', price: 'RM 1.90' }
        ]
      },
      {
        subCategory: 'Strawberry',
        icon: 'cherry',
        image: '/items/strawberry.jpg',
        items: [
          { name: 'Strawberry', enName: 'Strawberi', moq: '1 CTN', image: '/items/strawberry.jpg', price: 'RM 165.00' }
        ]
      }
    ]
  },
  {
    category: 'Meat',
    items: [
      { name: 'Mutton', enName: 'Kambing', moq: 'COMMERCIAL PKG', image: '/items/mutton.jpg' },
      { name: 'Chicken', enName: 'Ayam', moq: 'COMMERCIAL PKG', image: '/items/chicken.jpg' }
    ]
  },
  {
    category: 'Seafood',
    items: [
      { name: 'All Kind of Frozen Fish', enName: 'Pelbagai Jenis Ikan Beku', moq: 'COMMERCIAL PKG', image: '/items/frozen_fish.jpg' },
      { name: 'Prawn', enName: 'Udang', moq: 'COMMERCIAL PKG', image: '/items/prawn.jpg' },
      { name: 'Squid', enName: 'Sotong', moq: 'COMMERCIAL PKG', image: '/items/squid.jpg' },
      { name: 'Crab', enName: 'Ketam', moq: 'COMMERCIAL PKG', image: '/items/crab.jpg' }
    ]
  },
  {
    category: 'Other',
    items: [
      {
        subCategory: 'TAUHU',
        icon: 'shopping',
        image: 'https://images.unsplash.com/photo-1579410141682-1dd7b26d83a1?auto=format&fit=crop&w=800&q=80',
        items: [
          { name: 'Mee kuning', enName: 'Yellow Noodles', moq: '450GM', image: '/items/mee_kuning.jpg', price: 'RM 1.85' },
          { name: 'Koey teow', enName: 'Flat Rice Noodles', moq: '450GM', image: '/items/koey_teow.jpg', price: 'RM 1.85' },
          { name: 'Tauhu keras', enName: 'Hard Tofu', moq: 'PCS', image: '/items/tauhu_keras.jpg', price: 'RM 0.80' },
          { name: 'Fish cake AAA', enName: 'Kek Ikan AAA', moq: '220GM', image: '/items/fish_ball_goreng_AAA.png', price: 'RM 2.95' },
          { name: 'Fish ball', enName: 'Bebola Ikan', moq: '135GM', image: '/items/fish_ball.jpg', price: 'RM 2.10' },
          { name: 'Mushrooms fish cake', enName: 'Kek Ikan Cendawan', moq: '300GM', image: '/items/mushroom_fish_cake.jpg', price: 'RM 3.65' },
          { name: 'Tauhu goreng', enName: 'Fried Tofu', moq: '300GM', image: '/items/tauhu_goreng.jpg', price: 'RM 3.55' },
          { name: 'Fish ball goreng AAA', enName: 'Fried Fish Ball AAA', moq: '180GM', image: '/items/fish_ball.jpg', price: 'RM 2.85' },
          { name: 'Mushrooms bebola ikan', enName: 'Mushroom Fish Ball', moq: '160GM', image: '/items/mushrooms_fish_ball.jpg', price: 'RM 2.85' },
          { name: 'Mushrooms fish ball goreng', enName: 'Fried Mushroom Fish Ball', moq: '160GM', image: '/items/fish_ball.jpg', price: 'RM 2.95' },
          { name: 'Tempe', enName: 'Tempeh', moq: '1 PCS', image: '/items/tempe.jpg', price: 'RM 1.00' },
          { name: 'Taugeh', enName: 'Bean Sprouts', moq: '3 KG', image: '/items/taugeh.jpg', price: 'RM 8.50' },
          { name: 'Tauhu kotak', enName: 'Box Tofu', moq: '300GM', image: '/items/tauhu_kotak.jpg', price: 'RM 1.00' },
          { name: 'Tauhu telur', enName: 'Egg Tofu', moq: '120GM', image: '/items/tauhu_telur.jpg', price: 'RM 0.90' }
        ]
      }
    ]
  }
];
