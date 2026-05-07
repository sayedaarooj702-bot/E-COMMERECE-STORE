const products=[
  // SERUMS
  {id:1,name:'Radiance Vitamin C Serum',desc:'Brightening 15% vitamin C with niacinamide for glass-skin glow',price:38,oldPrice:52,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Serums',stars:'★★★★★',rating:'4.9'},
  {id:2,name:'Hyaluronic Plump Serum',desc:'Triple-weight HA for 72hr plumping and deep hydration',price:42,oldPrice:0,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'Top Rated',cat:'Serums',stars:'★★★★★',rating:'4.8'},
  {id:3,name:'Retinol Renewal Serum',desc:'0.5% encapsulated retinol for overnight skin renewal',price:55,oldPrice:68,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'Premium',cat:'Serums',stars:'★★★★★',rating:'4.9'},
  {id:4,name:'Niacinamide 10% Serum',desc:'Minimises pores and balances oil for clearer skin',price:29,oldPrice:0,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'',cat:'Serums',stars:'★★★★☆',rating:'4.6'},
  {id:5,name:'Rose Brightening Serum',desc:'Rose extract & AHA blend for luminous, even-toned skin',price:46,oldPrice:0,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'New',cat:'Serums',stars:'★★★★★',rating:'4.7'},
  {id:6,name:'Peptide Youth Serum',desc:'7-peptide complex to visibly firm and smooth fine lines',price:62,oldPrice:78,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'Premium',cat:'Serums',stars:'★★★★★',rating:'4.9'},
  {id:7,name:'Bakuchiol Night Serum',desc:'Natural retinol alternative — gentle yet powerful renewal',price:50,oldPrice:0,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'',cat:'Serums',stars:'★★★★☆',rating:'4.5'},
  {id:8,name:'Azelaic Acid 10% Serum',desc:'Fade pigmentation and redness with azelaic acid',price:33,oldPrice:0,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'',cat:'Serums',stars:'★★★★★',rating:'4.8'},
  {id:9,name:'Snail Mucin Essence',desc:'96% snail secretion filtrate for ultimate repair & glow',price:36,oldPrice:48,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'Viral',cat:'Serums',stars:'★★★★★',rating:'4.9'},
  {id:10,name:'Alpha Arbutin Serum',desc:'Powerful dark spot corrector with alpha arbutin & kojic acid',price:31,oldPrice:0,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'',cat:'Serums',stars:'★★★★☆',rating:'4.6'},
  // MOISTURIZERS
  {id:11,name:'Deep Hydra Cream',desc:'72-hour hyaluronic acid moisture surge — all skin types',price:45,oldPrice:0,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Moisturizers',stars:'★★★★★',rating:'4.9'},
  {id:12,name:'Rich Barrier Balm',desc:'Ceramide-rich formula to restore and protect your skin barrier',price:52,oldPrice:65,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'Top Rated',cat:'Moisturizers',stars:'★★★★★',rating:'4.8'},
  {id:13,name:'Lightweight Gel Moisturizer',desc:'Oil-free water-gel for oily and combination skin',price:38,oldPrice:0,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'',cat:'Moisturizers',stars:'★★★★☆',rating:'4.5'},
  {id:14,name:'Collagen Boost Cream',desc:'Marine collagen & peptides to lift and firm mature skin',price:68,oldPrice:85,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'Premium',cat:'Moisturizers',stars:'★★★★★',rating:'4.9'},
  {id:15,name:'Squalane Daily Moisturizer',desc:'Ultralightweight plant-based squalane for all skin types',price:34,oldPrice:0,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'New',cat:'Moisturizers',stars:'★★★★★',rating:'4.7'},
  {id:16,name:'Overnight Dream Mask',desc:'Leave-on sleeping mask with shea & oat for morning-glowing skin',price:42,oldPrice:0,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'',cat:'Moisturizers',stars:'★★★★☆',rating:'4.6'},
  {id:17,name:'Sensitive Skin Soother',desc:'Fragrance-free centella & aloe for reactive and sensitive skin',price:36,oldPrice:0,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'',cat:'Moisturizers',stars:'★★★★★',rating:'4.8'},
  {id:18,name:'Glow Radiance Cream',desc:'Illuminating pearl & vitamin E moisturizer for a lit-from-within look',price:49,oldPrice:60,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'Viral',cat:'Moisturizers',stars:'★★★★★',rating:'4.9'},
  {id:19,name:'Probiotic Moisture Cream',desc:'Microbiome-supporting probiotics for balanced, healthy skin',price:55,oldPrice:0,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'New',cat:'Moisturizers',stars:'★★★★☆',rating:'4.5'},
  {id:20,name:'Rescue Barrier Cream',desc:'SOS cream for dry, cracked or irritated skin — instant relief',price:40,oldPrice:0,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'',cat:'Moisturizers',stars:'★★★★★',rating:'4.7'},
  // CLEANSERS
  {id:21,name:'Green Tea Foam Cleanser',desc:'Antioxidant-rich gentle foam — removes makeup and impurities',price:22,oldPrice:0,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'',cat:'Cleansers',stars:'★★★★★',rating:'4.8'},
  {id:22,name:'Oil-to-Milk Cleanser',desc:'Melts sunscreen and makeup, leaves skin silky not stripped',price:28,oldPrice:0,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Cleansers',stars:'★★★★★',rating:'4.9'},
  {id:23,name:'Salicylic Acid Cleanser',desc:'2% BHA cleanser for oily, acne-prone and congested skin',price:25,oldPrice:0,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'',cat:'Cleansers',stars:'★★★★☆',rating:'4.6'},
  {id:24,name:'Micellar Cleansing Water',desc:'No-rinse micellar water for sensitive and minimal-routine skin',price:18,oldPrice:0,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'New',cat:'Cleansers',stars:'★★★★★',rating:'4.7'},
  {id:25,name:'Charcoal Detox Cleanser',desc:'Activated charcoal to deep-clean pores and fight blackheads',price:24,oldPrice:30,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'',cat:'Cleansers',stars:'★★★★☆',rating:'4.4'},
  {id:26,name:'Hydrating Cream Cleanser',desc:'Milk-based cleanser that washes clean without tightness',price:26,oldPrice:0,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'',cat:'Cleansers',stars:'★★★★★',rating:'4.8'},
  {id:27,name:'AHA Exfoliating Cleanser',desc:'Glycolic & lactic acid blend for gentle daily exfoliation',price:30,oldPrice:36,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'',cat:'Cleansers',stars:'★★★★☆',rating:'4.5'},
  {id:28,name:'Rose Quartz Facial Wash',desc:'Soft rose water gel cleanser for dry and sensitive skin',price:22,oldPrice:0,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'New',cat:'Cleansers',stars:'★★★★★',rating:'4.7'},
  {id:29,name:'Colloidal Oat Cleanser',desc:'Ultra-soothing oat cleanser for eczema and rosacea-prone skin',price:27,oldPrice:0,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'',cat:'Cleansers',stars:'★★★★★',rating:'4.9'},
  {id:30,name:'Double Cleanse Balm',desc:'Melting cleansing balm for the perfect first-cleanse step',price:32,oldPrice:38,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Cleansers',stars:'★★★★★',rating:'4.8'},
  // TONERS
  {id:31,name:'Rose Water AHA Toner',desc:'Balancing rose water & glycolic acid toner for glow',price:28,oldPrice:0,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'',cat:'Toners',stars:'★★★★★',rating:'4.8'},
  {id:32,name:'Hydrating BHA Toner',desc:'2% BHA toner to exfoliate and unclog pores gently',price:30,oldPrice:0,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'Top Rated',cat:'Toners',stars:'★★★★★',rating:'4.9'},
  {id:33,name:'Witch Hazel Toner',desc:'Pore-refining witch hazel with calming aloe',price:22,oldPrice:0,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'',cat:'Toners',stars:'★★★★☆',rating:'4.5'},
  {id:34,name:'Cica Calming Toner',desc:'Centella asiatica toner to reduce redness and inflammation',price:26,oldPrice:32,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'New',cat:'Toners',stars:'★★★★★',rating:'4.7'},
  {id:35,name:'7-Skin Method Toner',desc:'Essence-like toner for layering technique hydration',price:34,oldPrice:0,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'',cat:'Toners',stars:'★★★★★',rating:'4.8'},
  {id:36,name:'Exfoliating Glow Toner',desc:'Lactic acid & papaya enzyme for instant brightening',price:32,oldPrice:38,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'',cat:'Toners',stars:'★★★★☆',rating:'4.6'},
  {id:37,name:'Fermented Rice Toner',desc:'K-beauty inspired brightening toner with fermented rice water',price:29,oldPrice:0,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'Viral',cat:'Toners',stars:'★★★★★',rating:'4.9'},
  {id:38,name:'Green Tea Hydro Toner',desc:'EGCG-rich antioxidant toner to prevent free radical damage',price:24,oldPrice:0,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'',cat:'Toners',stars:'★★★★☆',rating:'4.5'},
  {id:39,name:'Glycerin Hydra Mist',desc:'On-the-go facial mist for midday hydration refresh',price:18,oldPrice:0,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'New',cat:'Toners',stars:'★★★★★',rating:'4.7'},
  {id:40,name:'Ph-Balancing Prep Toner',desc:'Essential prep toner to optimise absorption of your serums',price:20,oldPrice:0,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'',cat:'Toners',stars:'★★★★☆',rating:'4.6'},
  // SPF & SUN
  {id:41,name:'SPF 50 Daily Shield',desc:'Lightweight mineral sunscreen — no white cast, all day protection',price:32,oldPrice:0,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'Bestseller',cat:'SPF & Sun',stars:'★★★★★',rating:'4.9'},
  {id:42,name:'Tinted SPF 40 BB Fluid',desc:'Sheer coverage + sun protection in one elegant formula',price:38,oldPrice:46,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'Top Rated',cat:'SPF & Sun',stars:'★★★★★',rating:'4.8'},
  {id:43,name:'Invisible Sun Stick SPF 50',desc:'On-the-go SPF reapplication stick — no residue, no fuss',price:28,oldPrice:0,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'New',cat:'SPF & Sun',stars:'★★★★★',rating:'4.7'},
  {id:44,name:'After-Sun Cooling Gel',desc:'Aloe vera & panthenol to soothe and restore after sun exposure',price:22,oldPrice:0,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'',cat:'SPF & Sun',stars:'★★★★☆',rating:'4.5'},
  {id:45,name:'Chemical SPF 30 Fluid',desc:'Ultra-fine chemical filter for a completely invisible finish',price:30,oldPrice:0,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'',cat:'SPF & Sun',stars:'★★★★☆',rating:'4.6'},
  {id:46,name:'Antioxidant SPF 50+',desc:'Vitamin C + E + ferulic acid SPF for ultimate daily defence',price:48,oldPrice:58,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'Premium',cat:'SPF & Sun',stars:'★★★★★',rating:'4.9'},
  {id:47,name:'SPF Setting Mist',desc:'Spray SPF to top up on the go without disturbing makeup',price:24,oldPrice:0,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'Viral',cat:'SPF & Sun',stars:'★★★★★',rating:'4.8'},
  {id:48,name:'Reef-Safe SPF 50 Lotion',desc:'Ocean-friendly mineral filter, safe for sensitive skin too',price:34,oldPrice:0,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'',cat:'SPF & Sun',stars:'★★★★☆',rating:'4.5'},
  {id:49,name:'Glow SPF 40 Cushion',desc:'Portable cushion compact with SPF and a dewy finish',price:40,oldPrice:48,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'New',cat:'SPF & Sun',stars:'★★★★★',rating:'4.7'},
  {id:50,name:'Kids SPF 50 Sunscreen',desc:'Gentle, fragrance-free mineral sunscreen for little ones',price:26,oldPrice:0,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'',cat:'SPF & Sun',stars:'★★★★★',rating:'4.9'},
  // EYE CARE
  {id:51,name:'Eye Rescue Balm',desc:'Caffeine & bakuchiol to de-puff and brighten under-eyes',price:42,oldPrice:0,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'',cat:'Eye Care',stars:'★★★★★',rating:'4.8'},
  {id:52,name:'Peptide Eye Cream',desc:'Multi-peptide cream to lift, firm and reduce crow\'s feet',price:56,oldPrice:68,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'Premium',cat:'Eye Care',stars:'★★★★★',rating:'4.9'},
  {id:53,name:'Hydrogel Eye Patches',desc:'30-pair collagen patches for instant brightening & de-puffing',price:28,oldPrice:0,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'Viral',cat:'Eye Care',stars:'★★★★★',rating:'4.9'},
  {id:54,name:'Retinol Eye Serum',desc:'Gentle 0.3% retinol eye serum for fine line reduction',price:48,oldPrice:58,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'',cat:'Eye Care',stars:'★★★★☆',rating:'4.6'},
  {id:55,name:'Vitamin K Eye Gel',desc:'Targets dark circles with vitamin K & arnica complex',price:34,oldPrice:0,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'New',cat:'Eye Care',stars:'★★★★★',rating:'4.7'},
  {id:56,name:'Cooling Eye Roller',desc:'Chilled metal roller + serum for instant morning de-puff',price:38,oldPrice:44,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Eye Care',stars:'★★★★★',rating:'4.8'},
  {id:57,name:'Lash & Brow Serum',desc:'Biotin-rich serum to strengthen and grow lashes and brows',price:44,oldPrice:0,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'',cat:'Eye Care',stars:'★★★★★',rating:'4.8'},
  {id:58,name:'Dark Circle Corrector',desc:'Brightening serum with kojic acid & vitamin C for eye area',price:40,oldPrice:0,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'',cat:'Eye Care',stars:'★★★★☆',rating:'4.5'},
  {id:59,name:'HA Eye Essence',desc:'Hyaluronic acid + ceramide eye essence for deep hydration',price:36,oldPrice:0,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'New',cat:'Eye Care',stars:'★★★★★',rating:'4.7'},
  {id:60,name:'Overnight Eye Mask',desc:'Sleeping eye mask with melatonin & black pearl for repair',price:32,oldPrice:0,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'',cat:'Eye Care',stars:'★★★★★',rating:'4.8'},
  // LIP CARE
  {id:61,name:'Lip Plump Gloss',desc:'Peptide-infused plumping lip gloss with a glossy finish',price:18,oldPrice:0,img:'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=420&fit=crop',badge:'Viral',cat:'Lip Care',stars:'★★★★★',rating:'4.9'},
  {id:62,name:'Overnight Lip Mask',desc:'Shea butter & vitamin E sleeping lip mask for soft lips',price:16,oldPrice:0,img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Lip Care',stars:'★★★★★',rating:'4.8'},
  {id:63,name:'Brown Sugar Lip Scrub',desc:'Gentle exfoliating lip scrub with real brown sugar & honey',price:14,oldPrice:0,img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=420&fit=crop',badge:'',cat:'Lip Care',stars:'★★★★☆',rating:'4.6'},
  {id:64,name:'SPF 30 Lip Balm',desc:'Daily lip protection with SPF 30 and jojoba oil',price:12,oldPrice:0,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=420&fit=crop',badge:'New',cat:'Lip Care',stars:'★★★★★',rating:'4.7'},
  {id:65,name:'Rose Lip Serum',desc:'Hyaluronic acid & rose extract for plumped, hydrated lips',price:22,oldPrice:28,img:'https://images.unsplash.com/photo-1608248593802-8eb3a2a6136e?w=400&h=420&fit=crop',badge:'',cat:'Lip Care',stars:'★★★★★',rating:'4.8'},
  {id:66,name:'Tinted Lip Oil',desc:'Nourishing tinted oil in 6 shades for a glossy natural look',price:20,oldPrice:0,img:'https://images.unsplash.com/photo-1615397323214-cb9192ce3b16?w=400&h=420&fit=crop',badge:'Viral',cat:'Lip Care',stars:'★★★★★',rating:'4.9'},
  {id:67,name:'Ceramide Lip Therapy',desc:'Barrier-repairing ceramide balm for severely chapped lips',price:15,oldPrice:0,img:'https://images.unsplash.com/photo-1556228720-1c2a60d0554c?w=400&h=420&fit=crop',badge:'',cat:'Lip Care',stars:'★★★★☆',rating:'4.5'},
  {id:68,name:'Collagen Lip Patches',desc:'Dissolvable collagen patches to plump and smooth lip lines',price:24,oldPrice:0,img:'https://images.unsplash.com/photo-1570194065650-d99fb4a86134?w=400&h=420&fit=crop',badge:'New',cat:'Lip Care',stars:'★★★★★',rating:'4.7'},
  {id:69,name:'Mint Refresh Lip Butter',desc:'Cooling peppermint & shea butter for a fresh, smooth pout',price:13,oldPrice:0,img:'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=420&fit=crop',badge:'',cat:'Lip Care',stars:'★★★★☆',rating:'4.6'},
  {id:70,name:'Volume Boost Lip Serum',desc:'Cinnamon & ginger complex for natural lip plumping',price:26,oldPrice:32,img:'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=420&fit=crop',badge:'Bestseller',cat:'Lip Care',stars:'★★★★★',rating:'4.8'},
];

const cats=['All','Serums','Moisturizers','Cleansers','Toners','SPF & Sun','Eye Care','Lip Care'];
let activeCat='All';
let cart={};

function cartCount(){return Object.values(cart).reduce((a,b)=>a+b.qty,0)}
function updateBadge(){document.getElementById('cart-badge').textContent=cartCount()}

function addToCart(id){
  const p=products.find(x=>x.id===id);
  if(cart[id])cart[id].qty++;else cart[id]={...p,qty:1};
  updateBadge();
  showToast('Added: '+p.name+' 🌸');
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}

function badgeClass(b){
  if(b==='Premium'||b==='Top Rated')return 'gold';
  if(b==='New')return 'new';
  return '';
}

function productCard(p){
  return`<div class="p-card">
    <div class="p-img">
      ${p.badge?`<div class="p-badge ${badgeClass(p.badge)}">${p.badge}</div>`:''}
      <button class="p-wishlist">♡</button>
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x420/FDF3F6/E8517A?text=${encodeURIComponent(p.name)}'">
    </div>
    <div class="p-info">
      <div class="p-cat">${p.cat}</div>
      <div class="p-stars">${p.stars} <span style="font-size:.72rem;color:var(--muted);font-family:var(--ff-body)">(${p.rating})</span></div>
      <div class="p-name">${p.name}</div>
      <div class="p-desc">${p.desc}</div>
      <div class="p-foot">
        <div><span class="p-price">$${p.price}</span>${p.oldPrice?`<span class="p-old">$${p.oldPrice}</span>`:''}</div>
        <button class="add-btn" onclick="addToCart(${p.id})">+</button>
      </div>
    </div>
  </div>`;
}

function renderFeatured(){
  const feat=products.filter(p=>p.badge==='Bestseller'||p.badge==='Top Rated'||p.badge==='Viral').slice(0,8);
  document.getElementById('featured-grid').innerHTML=feat.map(productCard).join('');
}

function renderProducts(){
  const list=activeCat==='All'?products:products.filter(p=>p.cat===activeCat);
  document.getElementById('products-grid').innerHTML=list.map(productCard).join('');
}

function renderFilters(){
  document.getElementById('filter-btns').innerHTML=cats.map(c=>
    `<button class="fil${c===activeCat?' active':''}" onclick="setFilter('${c}')">${c}</button>`
  ).join('');
}

function setFilter(c){activeCat=c;renderFilters();renderProducts()}

function renderCart(){
  const items=Object.values(cart);
  if(!items.length){
    document.getElementById('cart-content').innerHTML=`<div class="cart-empty"><div class="cart-empty-icon">🌸</div><p style="font-family:var(--ff-head);font-size:1.2rem;font-weight:700;margin-bottom:.5rem;color:var(--dark)">Your cart is empty</p><p style="color:var(--muted);margin-bottom:1.5rem">Add some glow to your routine!</p><button class="btn-rose" onclick="showPage('products')">Browse Products</button></div>`;
    return;
  }
  const sub=items.reduce((a,b)=>a+b.price*b.qty,0);
  const ship=sub>=50?0:6.99;
  const total=sub+ship;
  document.getElementById('cart-content').innerHTML=`
  <div class="cart-layout">
    <div class="cart-items-col">
      ${items.map(i=>`
      <div class="c-item">
        <div class="c-item-img"><img src="${i.img}" alt="${i.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.src='https://placehold.co/400x420/FDF3F6/E8517A?text=${encodeURIComponent(i.name)}'"></div>
        <div class="c-item-info">
          <div class="c-item-name">${i.name}</div>
          <div class="c-item-price">$${i.price}</div>
          <div class="c-qty">
            <button class="q-btn" onclick="changeQty(${i.id},-1)">−</button>
            <span class="q-num">${i.qty}</span>
            <button class="q-btn" onclick="changeQty(${i.id},1)">+</button>
            <button class="rem-btn" onclick="removeItem(${i.id})">✕</button>
          </div>
        </div>
        <div style="font-family:var(--ff-head);font-weight:900;color:var(--rose);font-size:1rem">$${(i.price*i.qty).toFixed(2)}</div>
      </div>`).join('')}
    </div>
    <div class="cart-summary">
      <div class="cs-title">Order Summary</div>
      <div class="cs-row"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
      <div class="cs-row"><span>Shipping</span><span>${ship===0?'FREE 🎉':'$'+ship.toFixed(2)}</span></div>
      ${ship>0?`<div class="cs-row"><span style="color:var(--rose-light);font-size:.8rem">Add $${(50-sub).toFixed(2)} more for free shipping!</span></div>`:''}
      <div class="cs-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
      <div class="cs-promo">
        <input type="text" placeholder="Promo code">
        <button>Apply</button>
      </div>
      <button class="checkout-btn" onclick="checkout()">Checkout →</button>
    </div>
  </div>`;
}

function changeQty(id,d){
  if(cart[id]){cart[id].qty+=d;if(cart[id].qty<=0)delete cart[id];}
  updateBadge();renderCart();
}
function removeItem(id){delete cart[id];updateBadge();renderCart()}
function checkout(){showToast('🎉 Order placed! Thank you for shopping Glowify!');cart={};updateBadge();renderCart()}

function sendContact(){
  const n=document.getElementById('cn').value,e=document.getElementById('ce').value;
  if(!n||!e){showToast('Please fill in name and email 🌸');return}
  showToast('Message sent! We\'ll reply within 24hrs 💌');
  document.getElementById('cn').value='';document.getElementById('ce').value='';document.getElementById('cm').value='';
}

function showPage(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const nav=document.getElementById('nav-'+p);if(nav)nav.classList.add('active');
  if(p==='cart')renderCart();
  window.scrollTo(0,0);
}

renderFeatured();renderFilters();renderProducts();
