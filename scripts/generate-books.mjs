import fs from 'fs/promises';

const bookList = [
  { id: '1984', title: '1984', author: 'George Orwell' },
  { id: 'hobbit', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 'pride-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 'the-alchemist', title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 'gone-girl', title: 'Gone Girl', author: 'Gillian Flynn' },
  { id: 'kite-runner', title: 'The Kite Runner', author: 'Khaled Hosseini' },
  { id: 'harry1', title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling' },
  { id: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear' },
  { id: 'murder-orient', title: 'Murder on the Orient Express', author: 'Agatha Christie' },
  { id: 'fault-stars', title: 'The Fault in Our Stars', author: 'John Green' },
  { id: 'to-kill-a-mockingbird', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 'great-gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 'moby-dick', title: 'Moby-Dick', author: 'Herman Melville' },
  { id: 'lord-rings', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 'catch-22', title: 'Catch-22', author: 'Joseph Heller' },
  { id: 'the-road', title: 'The Road', author: 'Cormac McCarthy' },
  { id: 'handmaids-tale', title: "The Handmaid's Tale", author: 'Margaret Atwood' },
  { id: 'slaughterhouse-five', title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut' },
  { id: 'odyssey', title: 'The Odyssey', author: 'Homer' },
  { id: 'ulysses', title: 'Ulysses', author: 'James Joyce' },
  { id: 'brothers-karamazov', title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
  { id: 'frankenstein', title: 'Frankenstein', author: 'Mary Shelley' },
  { id: 'dracula', title: 'Dracula', author: 'Bram Stoker' },
  { id: 'narnia', title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  { id: 'hunger-games', title: 'The Hunger Games', author: 'Suzanne Collins' },
  { id: 'da-vinci-code', title: 'The Da Vinci Code', author: 'Dan Brown' },
  { id: 'the-giver', title: 'The Giver', author: 'Lois Lowry' },
  { id: 'life-of-pi', title: 'Life of Pi', author: 'Yann Martel' },
  { id: 'beloved', title: 'Beloved', author: 'Toni Morrison' },
  { id: 'infinite-jest', title: 'Infinite Jest', author: 'David Foster Wallace' },
  { id: 'the-sun-also-rises', title: 'The Sun Also Rises', author: 'Ernest Hemingway' },
  { id: 'on-the-road', title: 'On the Road', author: 'Jack Kerouac' },
  { id: 'the-catcher', title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 'the-bell-jar', title: 'The Bell Jar', author: 'Sylvia Plath' },
  { id: 'a-brave-new-world', title: 'Brave New World', author: 'Aldous Huxley' },
  { id: 'norwegian-wood', title: 'Norwegian Wood', author: 'Haruki Murakami' },
  { id: 'memoirs-geisha', title: 'Memoirs of a Geisha', author: 'Arthur Golden' },
  { id: 'tale-two-cities', title: 'A Tale of Two Cities', author: 'Charles Dickens' },
  { id: 'emma', title: 'Emma', author: 'Jane Austen' },
  { id: 'sense-sensibility', title: 'Sense and Sensibility', author: 'Jane Austen' },
  { id: 'the-stand', title: 'The Stand', author: 'Stephen King' },
  { id: 'it', title: 'It', author: 'Stephen King' },
  { id: 'the-shining', title: 'The Shining', author: 'Stephen King' },
  { id: 'american-gods', title: 'American Gods', author: 'Neil Gaiman' },
  { id: 'coraline', title: 'Coraline', author: 'Neil Gaiman' },
  { id: 'good-omens', title: 'Good Omens', author: 'Neil Gaiman & Terry Pratchett' },
  { id: 'white-teeth', title: 'White Teeth', author: 'Zadie Smith' },
  { id: 'the-goldfinch', title: 'The Goldfinch', author: 'Donna Tartt' },
  { id: 'brief-wondrous-oscar', title: 'The Brief Wondrous Life of Oscar Wao', author: 'Junot Díaz' },
  { id: 'middlemarch', title: 'Middlemarch', author: 'George Eliot' },
  { id: 'madame-bovary', title: 'Madame Bovary', author: 'Gustave Flaubert' },
  { id: 'name-of-the-wind', title: 'The Name of the Wind', author: 'Patrick Rothfuss' },
  { id: 'mistborn', title: 'Mistborn: The Final Empire', author: 'Brandon Sanderson' },
  { id: 'eye-of-world', title: 'The Eye of the World', author: 'Robert Jordan' },
  { id: 'dune', title: 'Dune', author: 'Frank Herbert' },
  { id: 'foundation', title: 'Foundation', author: 'Isaac Asimov' },
  { id: 'enders-game', title: "Ender's Game", author: 'Orson Scott Card' },
  { id: 'the-martian', title: 'The Martian', author: 'Andy Weir' },
  { id: 'ready-player-one', title: 'Ready Player One', author: 'Ernest Cline' },
  { id: 'fellowship', title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' },
  { id: 'two-towers', title: 'The Two Towers', author: 'J.R.R. Tolkien' },
  { id: 'return-king', title: 'The Return of the King', author: 'J.R.R. Tolkien' },
  { id: 'dorian-gray', title: 'The Picture of Dorian Gray', author: 'Oscar Wilde' },
  { id: 'portrait-lady', title: 'The Portrait of a Lady', author: 'Henry James' },
  { id: 'their-eyes', title: "Their Eyes Were Watching God", author: 'Zora Neale Hurston' },
  { id: 'dispossessed', title: 'The Dispossessed', author: 'Ursula K. Le Guin' },
  { id: 'left-hand-darkness', title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin' },
  { id: 'metamorphosis', title: 'The Metamorphosis', author: 'Franz Kafka' },
  { id: 'bel-canto', title: 'Bel Canto', author: 'Ann Patchett' },
  { id: 'thing-around-neck', title: 'The Thing Around Your Neck', author: 'Chimamanda Ngozi Adichie' },
  { id: 'half-blood-prince', title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling' },
  { id: 'deathly-hallows', title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling' },
  { id: 'do-androids', title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick' },
  { id: 'norse-myth', title: 'Norse Mythology', author: 'Neil Gaiman' },
  { id: 'hand-fatima', title: 'The Hand of Fatima', author: 'Ildefonso Falcones' },
  { id: 'like-water', title: 'Like Water for Chocolate', author: 'Laura Esquivel' },
  { id: 'pachinko', title: 'Pachinko', author: 'Min Jin Lee' },
  { id: 'orphan-master', title: 'The Orphan Master’s Son', author: 'Adam Johnson' },
  { id: 'white-noise', title: 'White Noise', author: 'Don DeLillo' },
  { id: 'house-spirits', title: 'The House of the Spirits', author: 'Isabel Allende' },
  { id: 'silmarillion', title: 'The Silmarillion', author: 'J.R.R. Tolkien' },
  { id: 'owen-meany', title: 'A Prayer for Owen Meany', author: 'John Irving' },
  { id: 'color-purple', title: 'The Color Purple', author: 'Alice Walker' },
  { id: 'secret-garden', title: 'The Secret Garden', author: 'Frances Hodgson Burnett' },
  { id: 'monte-cristo', title: 'The Count of Monte Cristo', author: 'Alexandre Dumas' },
  { id: 'anna-karenina', title: 'Anna Karenina', author: 'Leo Tolstoy' },
  { id: 'war-and-peace', title: 'War and Peace', author: 'Leo Tolstoy' },
  { id: 'crime-and-punishment', title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  { id: 'the-idiot', title: 'The Idiot', author: 'Fyodor Dostoevsky' },
  { id: 'moon-sixpence', title: 'The Moon and Sixpence', author: 'W. Somerset Maugham' },
  { id: 'old-man-sea', title: 'The Old Man and the Sea', author: 'Ernest Hemingway' },
  { id: 'a-thousand-splendid-suns', title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini' },
  { id: 'secret-history', title: 'The Secret History', author: 'Donna Tartt' },
  { id: 'siddhartha', title: 'Siddhartha', author: 'Hermann Hesse' },
  { id: 'stranger', title: 'The Stranger', author: 'Albert Camus' },
  { id: 'persepolis', title: 'Persepolis', author: 'Marjane Satrapi' },
  { id: 'wind-up-bird', title: 'The Wind-Up Bird Chronicle', author: 'Haruki Murakami' },
  { id: 'the-secret-history-2', title: 'The Secret Garden', author: 'Frances Hodgson Burnett' },
  { id: 'the-queen', title: 'The Queen of the Damned', author: 'Anne Rice' },
  { id: 'the-alice', title: 'Alice’s Adventures in Wonderland', author: 'Lewis Carroll' },
  { id: 'the-chronicles-2', title: 'Chronicle of a Death Foretold', author: 'Gabriel Garcia Marquez' },
  { id: 'one-hundred-years', title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez' },
  { id: 'love-in-time', title: 'Love in the Time of Cholera', author: 'Gabriel Garcia Marquez' },
  { id: 'the-idiot-2', title: 'Demons', author: 'Fyodor Dostoevsky' }
];

const ALL_MOODS = [
  'sad','angry','heartbroken','betrayal','furious','curious','motivated','romantic','hopeful','adventurous','nostalgic','dark','wholesome','mysterious','funny','tragic'
];

function randomRating(){
  return Math.round((3.5 + Math.random()*1.4)*10)/10;
}

function pickGenres(subjects){
  if(!subjects || !subjects.length) return ['fiction'];
  const genres = [];
  const mapping = ['fantasy','classic','science fiction','mystery','romance','historical','philosophy','adventure','nonfiction','young-adult','horror','literary','satire'];
  for(const sub of subjects){
    for(const g of mapping){
      if(sub.toLowerCase().includes(g) && !genres.includes(g)) genres.push(g);
    }
  }
  if(genres.length===0) genres.push(subjects[0].toLowerCase().split(',')[0].split(' ')[0]);
  return genres.slice(0,3);
}

function pickMoods(genres){
  const map = {
    'romance': ['romantic','hopeful','wholesome'],
    'fantasy': ['adventurous','mysterious','nostalgic'],
    'horror': ['dark','mysterious','tragic'],
    'mystery': ['curious','mysterious','dark'],
    'adventure': ['adventurous','hopeful','motivated'],
    'historical': ['nostalgic','tragic','heartbroken'],
    'satire': ['funny','dark'],
    'science': ['curious','motivated'],
  };
  const moods = [];
  for(const g of genres){
    if(map[g]) for(const m of map[g]) if(!moods.includes(m)) moods.push(m);
  }
  while(moods.length<3) {
    const m = ALL_MOODS[Math.floor(Math.random()*ALL_MOODS.length)];
    if(!moods.includes(m)) moods.push(m);
  }
  return moods.slice(0,3);
}

async function fetchData(title, author){
  const q = new URL('https://openlibrary.org/search.json');
  q.searchParams.set('title', title);
  q.searchParams.set('author', author);
  q.searchParams.set('limit', '1');
  try{
    const res = await fetch(q.toString());
    if(!res.ok) return null;
    const data = await res.json();
    return data.docs && data.docs[0] ? data.docs[0] : null;
  }catch(e){
    return null;
  }
}

async function main(){
  const books = [];
  for(const item of bookList){
    const doc = await fetchData(item.title, item.author);
    const coverUrl = doc && doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : '/placeholder.svg';
    const year = doc?.first_publish_year || doc?.publish_year?.[0] || null;
    const subjects = doc?.subject || [];
    const genres = pickGenres(subjects);
    const moods = pickMoods(genres);
    const synopsis = doc?.first_sentence?.[0] || doc?.subtitle || (subjects[0] ? `A book that touches on ${subjects[0]}.` : `A notable work by ${item.author}.`);
    const hints = [];
    if(subjects && subjects.length){
      hints.push(`Themes include ${subjects.slice(0,3).join(', ')}.`);
      hints.push(subjects[0].length>20 ? subjects[0].slice(0,60) : `Look for recurring ${subjects[0]}.`);
    } else {
      hints.push('Look for surprising character turns.');
      hints.push('Pay attention to recurring motifs.');
    }
    books.push({
      id: item.id,
      title: item.title,
      author: item.author,
      coverUrl,
      synopsis,
      genres,
      moods,
      hints,
      year,
      communityRating: randomRating(),
    });
    // throttle to avoid rate limits
    await new Promise(r=>setTimeout(r, 150));
  }

  const out = `import { Book, Listing, MoodKey } from "@shared/api";

export const ALL_MOODS: MoodKey[] = ${JSON.stringify(ALL_MOODS, null, 2)};

export const books: Book[] = ${JSON.stringify(books, null, 2)};

export const listings: Listing[] = [];
`;
  await fs.writeFile('server/data.ts', out, 'utf8');
  console.log('Wrote server/data.ts with', books.length, 'books');
}

main().catch(err=>{console.error(err); process.exit(1)});
