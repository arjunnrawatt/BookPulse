import { Book, Listing, MoodKey } from "@shared/api";

export const ALL_MOODS: MoodKey[] = [
  "sad",
  "angry",
  "heartbroken",
  "betrayal",
  "furious",
  "curious",
  "motivated",
  "romantic",
  "hopeful",
  "adventurous",
  "nostalgic",
  "dark",
  "wholesome",
  "mysterious",
  "funny",
  "tragic"
];

export const books: Book[] = [
  {
    "id": "1984",
    "title": "1984",
    "author": "George Orwell",
    "coverUrl": "https://covers.openlibrary.org/b/id/8745958-L.jpg",
    "synopsis": "A notable work by George Orwell.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "tragic",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2003,
    "communityRating": 4.2
  },
  {
    "id": "hobbit",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "coverUrl": "https://covers.openlibrary.org/b/id/14627509-L.jpg",
    "synopsis": "A notable work by J.R.R. Tolkien.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "furious",
      "adventurous"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1937,
    "communityRating": 4.8
  },
  {
    "id": "pride-prejudice",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "coverUrl": "https://covers.openlibrary.org/b/id/14348537-L.jpg",
    "synopsis": "A notable work by Jane Austen.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "mysterious",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1813,
    "communityRating": 4.8
  },
  {
    "id": "the-alchemist",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "coverUrl": "https://covers.openlibrary.org/b/id/11556106-L.jpg",
    "synopsis": "A notable work by Paulo Coelho.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "hopeful",
      "tragic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2010,
    "communityRating": 4.3
  },
  {
    "id": "gone-girl",
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "coverUrl": "https://covers.openlibrary.org/b/id/8368314-L.jpg",
    "synopsis": "A notable work by Gillian Flynn.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "funny",
      "angry",
      "romantic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2011,
    "communityRating": 4.8
  },
  {
    "id": "kite-runner",
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "coverUrl": "https://covers.openlibrary.org/b/id/14846827-L.jpg",
    "synopsis": "A notable work by Khaled Hosseini.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "curious",
      "dark",
      "wholesome"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2003,
    "communityRating": 3.6
  },
  {
    "id": "harry1",
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "coverUrl": "https://covers.openlibrary.org/b/id/276518-L.jpg",
    "synopsis": "A notable work by J.K. Rowling.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "curious",
      "romantic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2000,
    "communityRating": 4.6
  },
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "author": "James Clear",
    "coverUrl": "https://covers.openlibrary.org/b/id/12539702-L.jpg",
    "synopsis": "A notable work by James Clear.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "angry",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2016,
    "communityRating": 4.9
  },
  {
    "id": "murder-orient",
    "title": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "coverUrl": "https://covers.openlibrary.org/b/id/11100465-L.jpg",
    "synopsis": "A notable work by Agatha Christie.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "funny",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1933,
    "communityRating": 3.8
  },
  {
    "id": "fault-stars",
    "title": "The Fault in Our Stars",
    "author": "John Green",
    "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
    "synopsis": "A notable work by John Green.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "mysterious",
      "hopeful",
      "tragic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2010,
    "communityRating": 3.8
  },
  {
    "id": "to-kill-a-mockingbird",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "coverUrl": "https://covers.openlibrary.org/b/id/12606502-L.jpg",
    "synopsis": "A notable work by Harper Lee.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "adventurous",
      "furious",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1960,
    "communityRating": 4.8
  },
  {
    "id": "great-gatsby",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "coverUrl": "https://covers.openlibrary.org/b/id/10590366-L.jpg",
    "synopsis": "A notable work by F. Scott Fitzgerald.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "betrayal",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1920,
    "communityRating": 4.9
  },
  {
    "id": "moby-dick",
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "coverUrl": "https://covers.openlibrary.org/b/id/10544254-L.jpg",
    "synopsis": "A notable work by Herman Melville.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "furious",
      "heartbroken",
      "tragic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1851,
    "communityRating": 3.8
  },
  {
    "id": "lord-rings",
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "coverUrl": "https://covers.openlibrary.org/b/id/14625765-L.jpg",
    "synopsis": "A notable work by J.R.R. Tolkien.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "betrayal",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1954,
    "communityRating": 4.3
  },
  {
    "id": "catch-22",
    "title": "Catch-22",
    "author": "Joseph Heller",
    "coverUrl": "https://covers.openlibrary.org/b/id/6468653-L.jpg",
    "synopsis": "A notable work by Joseph Heller.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "adventurous",
      "furious",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1961,
    "communityRating": 4
  },
  {
    "id": "the-road",
    "title": "The Road",
    "author": "Cormac McCarthy",
    "coverUrl": "https://covers.openlibrary.org/b/id/198120-L.jpg",
    "synopsis": "A notable work by Cormac McCarthy.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "romantic",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2006,
    "communityRating": 4.5
  },
  {
    "id": "handmaids-tale",
    "title": "The Handmaid's Tale",
    "author": "Margaret Atwood",
    "coverUrl": "https://covers.openlibrary.org/b/id/8231851-L.jpg",
    "synopsis": "A notable work by Margaret Atwood.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "adventurous",
      "motivated",
      "angry"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1985,
    "communityRating": 3.5
  },
  {
    "id": "slaughterhouse-five",
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "coverUrl": "https://covers.openlibrary.org/b/id/12727001-L.jpg",
    "synopsis": "A notable work by Kurt Vonnegut.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "angry",
      "heartbroken"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1968,
    "communityRating": 3.9
  },
  {
    "id": "odyssey",
    "title": "The Odyssey",
    "author": "Homer",
    "coverUrl": "https://covers.openlibrary.org/b/id/12474938-L.jpg",
    "synopsis": "A notable work by Homer.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "motivated",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1946,
    "communityRating": 4.3
  },
  {
    "id": "ulysses",
    "title": "Ulysses",
    "author": "James Joyce",
    "coverUrl": "https://covers.openlibrary.org/b/id/13136548-L.jpg",
    "synopsis": "A notable work by James Joyce.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "furious",
      "angry"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1920,
    "communityRating": 4.4
  },
  {
    "id": "brothers-karamazov",
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "coverUrl": "https://covers.openlibrary.org/b/id/11263774-L.jpg",
    "synopsis": "A notable work by Fyodor Dostoevsky.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "betrayal",
      "hopeful",
      "adventurous"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2015,
    "communityRating": 4.1
  },
  {
    "id": "frankenstein",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "coverUrl": "https://covers.openlibrary.org/b/id/12356249-L.jpg",
    "synopsis": "A notable work by Mary Shelley.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "furious",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1818,
    "communityRating": 4.9
  },
  {
    "id": "dracula",
    "title": "Dracula",
    "author": "Bram Stoker",
    "coverUrl": "https://covers.openlibrary.org/b/id/12216503-L.jpg",
    "synopsis": "A notable work by Bram Stoker.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "funny",
      "angry",
      "wholesome"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1897,
    "communityRating": 4.4
  },
  {
    "id": "narnia",
    "title": "The Lion, the Witch and the Wardrobe",
    "author": "C.S. Lewis",
    "coverUrl": "https://covers.openlibrary.org/b/id/8441376-L.jpg",
    "synopsis": "A notable work by C.S. Lewis.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "mysterious",
      "wholesome",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1950,
    "communityRating": 4.7
  },
  {
    "id": "hunger-games",
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "coverUrl": "https://covers.openlibrary.org/b/id/12646537-L.jpg",
    "synopsis": "A notable work by Suzanne Collins.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "motivated",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2008,
    "communityRating": 3.8
  },
  {
    "id": "da-vinci-code",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "coverUrl": "https://covers.openlibrary.org/b/id/9255229-L.jpg",
    "synopsis": "A notable work by Dan Brown.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "furious",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2003,
    "communityRating": 3.6
  },
  {
    "id": "the-giver",
    "title": "The Giver",
    "author": "Lois Lowry",
    "coverUrl": "https://covers.openlibrary.org/b/id/8352502-L.jpg",
    "synopsis": "A notable work by Lois Lowry.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "adventurous",
      "motivated",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1993,
    "communityRating": 3.7
  },
  {
    "id": "life-of-pi",
    "title": "Life of Pi",
    "author": "Yann Martel",
    "coverUrl": "https://covers.openlibrary.org/b/id/12840573-L.jpg",
    "synopsis": "A notable work by Yann Martel.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "furious",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2001,
    "communityRating": 3.6
  },
  {
    "id": "beloved",
    "title": "Beloved",
    "author": "Toni Morrison",
    "coverUrl": "https://covers.openlibrary.org/b/id/8261367-L.jpg",
    "synopsis": "A notable work by Toni Morrison.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "curious",
      "motivated",
      "romantic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1987,
    "communityRating": 3.7
  },
  {
    "id": "infinite-jest",
    "title": "Infinite Jest",
    "author": "David Foster Wallace",
    "coverUrl": "https://covers.openlibrary.org/b/id/8237639-L.jpg",
    "synopsis": "A notable work by David Foster Wallace.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "angry",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1996,
    "communityRating": 4.8
  },
  {
    "id": "the-sun-also-rises",
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "coverUrl": "https://covers.openlibrary.org/b/id/78741-L.jpg",
    "synopsis": "A notable work by Ernest Hemingway.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "betrayal",
      "adventurous"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1926,
    "communityRating": 3.8
  },
  {
    "id": "on-the-road",
    "title": "On the Road",
    "author": "Jack Kerouac",
    "coverUrl": "https://covers.openlibrary.org/b/id/34655-L.jpg",
    "synopsis": "A notable work by Jack Kerouac.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "wholesome",
      "furious",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1957,
    "communityRating": 4.7
  },
  {
    "id": "the-catcher",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "coverUrl": "https://covers.openlibrary.org/b/id/9273490-L.jpg",
    "synopsis": "A notable work by J.D. Salinger.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "romantic",
      "adventurous"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1945,
    "communityRating": 4.6
  },
  {
    "id": "the-bell-jar",
    "title": "The Bell Jar",
    "author": "Sylvia Plath",
    "coverUrl": "https://covers.openlibrary.org/b/id/8477115-L.jpg",
    "synopsis": "A notable work by Sylvia Plath.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "adventurous",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1963,
    "communityRating": 4.3
  },
  {
    "id": "a-brave-new-world",
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "coverUrl": "https://covers.openlibrary.org/b/id/8231823-L.jpg",
    "synopsis": "A notable work by Aldous Huxley.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "funny",
      "tragic",
      "betrayal"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1932,
    "communityRating": 4
  },
  {
    "id": "norwegian-wood",
    "title": "Norwegian Wood",
    "author": "Haruki Murakami",
    "coverUrl": "https://covers.openlibrary.org/b/id/2237620-L.jpg",
    "synopsis": "A notable work by Haruki Murakami.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "adventurous",
      "sad",
      "heartbroken"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1987,
    "communityRating": 4.4
  },
  {
    "id": "memoirs-geisha",
    "title": "Memoirs of a Geisha",
    "author": "Arthur Golden",
    "coverUrl": "https://covers.openlibrary.org/b/id/8231782-L.jpg",
    "synopsis": "A notable work by Arthur Golden.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "betrayal",
      "furious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1997,
    "communityRating": 4.8
  },
  {
    "id": "tale-two-cities",
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "coverUrl": "https://covers.openlibrary.org/b/id/13301713-L.jpg",
    "synopsis": "A notable work by Charles Dickens.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "wholesome",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1800,
    "communityRating": 4.3
  },
  {
    "id": "emma",
    "title": "Emma",
    "author": "Jane Austen",
    "coverUrl": "https://covers.openlibrary.org/b/id/9278312-L.jpg",
    "synopsis": "A notable work by Jane Austen.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "nostalgic",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1815,
    "communityRating": 3.8
  },
  {
    "id": "sense-sensibility",
    "title": "Sense and Sensibility",
    "author": "Jane Austen",
    "coverUrl": "https://covers.openlibrary.org/b/id/9278292-L.jpg",
    "synopsis": "A notable work by Jane Austen.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "furious",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1811,
    "communityRating": 4.6
  },
  {
    "id": "the-stand",
    "title": "The Stand",
    "author": "Stephen King",
    "coverUrl": "https://covers.openlibrary.org/b/id/9255992-L.jpg",
    "synopsis": "A notable work by Stephen King.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "funny",
      "wholesome",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1978,
    "communityRating": 3.8
  },
  {
    "id": "it",
    "title": "It",
    "author": "Stephen King",
    "coverUrl": "https://covers.openlibrary.org/b/id/8569284-L.jpg",
    "synopsis": "A notable work by Stephen King.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "curious",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1986,
    "communityRating": 4.8
  },
  {
    "id": "the-shining",
    "title": "The Shining",
    "author": "Stephen King",
    "coverUrl": "https://covers.openlibrary.org/b/id/12376585-L.jpg",
    "synopsis": "A notable work by Stephen King.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "furious",
      "heartbroken"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1977,
    "communityRating": 3.7
  },
  {
    "id": "american-gods",
    "title": "American Gods",
    "author": "Neil Gaiman",
    "coverUrl": "https://covers.openlibrary.org/b/id/8494659-L.jpg",
    "synopsis": "A notable work by Neil Gaiman.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "funny",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2001,
    "communityRating": 4.4
  },
  {
    "id": "coraline",
    "title": "Coraline",
    "author": "Neil Gaiman",
    "coverUrl": "https://covers.openlibrary.org/b/id/14171421-L.jpg",
    "synopsis": "A notable work by Neil Gaiman.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "funny",
      "nostalgic",
      "wholesome"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2002,
    "communityRating": 4.2
  },
  {
    "id": "good-omens",
    "title": "Good Omens",
    "author": "Neil Gaiman & Terry Pratchett",
    "coverUrl": "https://covers.openlibrary.org/b/id/10482258-L.jpg",
    "synopsis": "A notable work by Neil Gaiman & Terry Pratchett.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "furious",
      "hopeful",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1990,
    "communityRating": 4.9
  },
  {
    "id": "white-teeth",
    "title": "White Teeth",
    "author": "Zadie Smith",
    "coverUrl": "https://covers.openlibrary.org/b/id/5276331-L.jpg",
    "synopsis": "A notable work by Zadie Smith.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "funny",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2000,
    "communityRating": 3.5
  },
  {
    "id": "the-goldfinch",
    "title": "The Goldfinch",
    "author": "Donna Tartt",
    "coverUrl": "https://covers.openlibrary.org/b/id/8771366-L.jpg",
    "synopsis": "A notable work by Donna Tartt.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "betrayal",
      "curious",
      "furious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2013,
    "communityRating": 3.6
  },
  {
    "id": "brief-wondrous-oscar",
    "title": "The Brief Wondrous Life of Oscar Wao",
    "author": "Junot Díaz",
    "coverUrl": "https://covers.openlibrary.org/b/id/12451659-L.jpg",
    "synopsis": "A notable work by Junot Díaz.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "angry",
      "adventurous"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2007,
    "communityRating": 3.8
  },
  {
    "id": "middlemarch",
    "title": "Middlemarch",
    "author": "George Eliot",
    "coverUrl": "https://covers.openlibrary.org/b/id/252882-L.jpg",
    "synopsis": "A notable work by George Eliot.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "funny",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1871,
    "communityRating": 4.8
  },
  {
    "id": "madame-bovary",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "coverUrl": "https://covers.openlibrary.org/b/id/12993424-L.jpg",
    "synopsis": "A notable work by Gustave Flaubert.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "wholesome",
      "funny",
      "nostalgic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1856,
    "communityRating": 4.7
  },
  {
    "id": "name-of-the-wind",
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "coverUrl": "https://covers.openlibrary.org/b/id/11480483-L.jpg",
    "synopsis": "A notable work by Patrick Rothfuss.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "furious",
      "curious",
      "angry"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2007,
    "communityRating": 4.3
  },
  {
    "id": "mistborn",
    "title": "Mistborn: The Final Empire",
    "author": "Brandon Sanderson",
    "coverUrl": "/placeholder.svg",
    "synopsis": "A notable work by Brandon Sanderson.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "motivated",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2017,
    "communityRating": 3.8
  },
  {
    "id": "eye-of-world",
    "title": "The Eye of the World",
    "author": "Robert Jordan",
    "coverUrl": "https://covers.openlibrary.org/b/id/980232-L.jpg",
    "synopsis": "A notable work by Robert Jordan.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "wholesome",
      "nostalgic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1990,
    "communityRating": 3.9
  },
  {
    "id": "dune",
    "title": "Dune",
    "author": "Frank Herbert",
    "coverUrl": "https://covers.openlibrary.org/b/id/11481354-L.jpg",
    "synopsis": "A notable work by Frank Herbert.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "angry",
      "adventurous"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1965,
    "communityRating": 4.6
  },
  {
    "id": "foundation",
    "title": "Foundation",
    "author": "Isaac Asimov",
    "coverUrl": "https://covers.openlibrary.org/b/id/14612610-L.jpg",
    "synopsis": "A notable work by Isaac Asimov.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "motivated",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1951,
    "communityRating": 4.3
  },
  {
    "id": "enders-game",
    "title": "Ender's Game",
    "author": "Orson Scott Card",
    "coverUrl": "https://covers.openlibrary.org/b/id/12996033-L.jpg",
    "synopsis": "A notable work by Orson Scott Card.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "romantic",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1985,
    "communityRating": 4.8
  },
  {
    "id": "the-martian",
    "title": "The Martian",
    "author": "Andy Weir",
    "coverUrl": "https://covers.openlibrary.org/b/id/11447888-L.jpg",
    "synopsis": "A notable work by Andy Weir.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "heartbroken",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2011,
    "communityRating": 3.8
  },
  {
    "id": "ready-player-one",
    "title": "Ready Player One",
    "author": "Ernest Cline",
    "coverUrl": "https://covers.openlibrary.org/b/id/8737626-L.jpg",
    "synopsis": "A notable work by Ernest Cline.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "wholesome",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2008,
    "communityRating": 4.5
  },
  {
    "id": "fellowship",
    "title": "The Fellowship of the Ring",
    "author": "J.R.R. Tolkien",
    "coverUrl": "https://covers.openlibrary.org/b/id/14627060-L.jpg",
    "synopsis": "A notable work by J.R.R. Tolkien.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "motivated",
      "tragic",
      "nostalgic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1954,
    "communityRating": 3.6
  },
  {
    "id": "two-towers",
    "title": "The Two Towers",
    "author": "J.R.R. Tolkien",
    "coverUrl": "https://covers.openlibrary.org/b/id/14627564-L.jpg",
    "synopsis": "A notable work by J.R.R. Tolkien.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "funny",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1954,
    "communityRating": 4.2
  },
  {
    "id": "return-king",
    "title": "The Return of the King",
    "author": "J.R.R. Tolkien",
    "coverUrl": "https://covers.openlibrary.org/b/id/14627062-L.jpg",
    "synopsis": "A notable work by J.R.R. Tolkien.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "adventurous",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1950,
    "communityRating": 4.5
  },
  {
    "id": "dorian-gray",
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "coverUrl": "https://covers.openlibrary.org/b/id/14314858-L.jpg",
    "synopsis": "A notable work by Oscar Wilde.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "motivated",
      "funny",
      "angry"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1890,
    "communityRating": 4.8
  },
  {
    "id": "portrait-lady",
    "title": "The Portrait of a Lady",
    "author": "Henry James",
    "coverUrl": "https://covers.openlibrary.org/b/id/3352367-L.jpg",
    "synopsis": "A notable work by Henry James.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "motivated",
      "wholesome"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1882,
    "communityRating": 3.9
  },
  {
    "id": "their-eyes",
    "title": "Their Eyes Were Watching God",
    "author": "Zora Neale Hurston",
    "coverUrl": "https://covers.openlibrary.org/b/id/12752055-L.jpg",
    "synopsis": "A notable work by Zora Neale Hurston.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "wholesome",
      "heartbroken",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1937,
    "communityRating": 4.5
  },
  {
    "id": "dispossessed",
    "title": "The Dispossessed",
    "author": "Ursula K. Le Guin",
    "coverUrl": "https://covers.openlibrary.org/b/id/6979680-L.jpg",
    "synopsis": "An Ambiguous Utopia",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "romantic",
      "heartbroken"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1974,
    "communityRating": 4.7
  },
  {
    "id": "left-hand-darkness",
    "title": "The Left Hand of Darkness",
    "author": "Ursula K. Le Guin",
    "coverUrl": "https://covers.openlibrary.org/b/id/10618463-L.jpg",
    "synopsis": "A notable work by Ursula K. Le Guin.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "adventurous",
      "nostalgic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1969,
    "communityRating": 3.7
  },
  {
    "id": "metamorphosis",
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "coverUrl": "https://covers.openlibrary.org/b/id/6889547-L.jpg",
    "synopsis": "A notable work by Franz Kafka.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "betrayal",
      "furious",
      "heartbroken"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1996,
    "communityRating": 4.6
  },
  {
    "id": "bel-canto",
    "title": "Bel Canto",
    "author": "Ann Patchett",
    "coverUrl": "https://covers.openlibrary.org/b/id/5253806-L.jpg",
    "synopsis": "A notable work by Ann Patchett.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "wholesome",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2001,
    "communityRating": 3.9
  },
  {
    "id": "thing-around-neck",
    "title": "The Thing Around Your Neck",
    "author": "Chimamanda Ngozi Adichie",
    "coverUrl": "https://covers.openlibrary.org/b/id/11320253-L.jpg",
    "synopsis": "A notable work by Chimamanda Ngozi Adichie.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "funny",
      "sad",
      "heartbroken"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2009,
    "communityRating": 4.6
  },
  {
    "id": "half-blood-prince",
    "title": "Harry Potter and the Half-Blood Prince",
    "author": "J.K. Rowling",
    "coverUrl": "https://covers.openlibrary.org/b/id/10716273-L.jpg",
    "synopsis": "A notable work by J.K. Rowling.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "adventurous",
      "funny",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2005,
    "communityRating": 4.3
  },
  {
    "id": "deathly-hallows",
    "title": "Harry Potter and the Deathly Hallows",
    "author": "J.K. Rowling",
    "coverUrl": "https://covers.openlibrary.org/b/id/10110415-L.jpg",
    "synopsis": "A notable work by J.K. Rowling.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "sad",
      "furious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2007,
    "communityRating": 3.7
  },
  {
    "id": "do-androids",
    "title": "Do Androids Dream of Electric Sheep?",
    "author": "Philip K. Dick",
    "coverUrl": "https://covers.openlibrary.org/b/id/207515-L.jpg",
    "synopsis": "A notable work by Philip K. Dick.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "betrayal",
      "tragic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1968,
    "communityRating": 3.6
  },
  {
    "id": "norse-myth",
    "title": "Norse Mythology",
    "author": "Neil Gaiman",
    "coverUrl": "https://covers.openlibrary.org/b/id/7898682-L.jpg",
    "synopsis": "A notable work by Neil Gaiman.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "romantic",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2016,
    "communityRating": 3.8
  },
  {
    "id": "hand-fatima",
    "title": "The Hand of Fatima",
    "author": "Ildefonso Falcones",
    "coverUrl": "https://covers.openlibrary.org/b/id/8420499-L.jpg",
    "synopsis": "A notable work by Ildefonso Falcones.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "tragic",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2011,
    "communityRating": 4.4
  },
  {
    "id": "like-water",
    "title": "Like Water for Chocolate",
    "author": "Laura Esquivel",
    "coverUrl": "/placeholder.svg",
    "synopsis": "A notable work by Laura Esquivel.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "wholesome",
      "angry",
      "romantic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1992,
    "communityRating": 4.3
  },
  {
    "id": "pachinko",
    "title": "Pachinko",
    "author": "Min Jin Lee",
    "coverUrl": "https://covers.openlibrary.org/b/id/8044605-L.jpg",
    "synopsis": "A notable work by Min Jin Lee.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "funny",
      "tragic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2017,
    "communityRating": 4.8
  },
  {
    "id": "orphan-master",
    "title": "The Orphan Master’s Son",
    "author": "Adam Johnson",
    "coverUrl": "https://covers.openlibrary.org/b/id/8148374-L.jpg",
    "synopsis": "A notable work by Adam Johnson.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "motivated",
      "heartbroken",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2012,
    "communityRating": 4.3
  },
  {
    "id": "white-noise",
    "title": "White Noise",
    "author": "Don DeLillo",
    "coverUrl": "https://covers.openlibrary.org/b/id/94015-L.jpg",
    "synopsis": "A notable work by Don DeLillo.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "betrayal",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1984,
    "communityRating": 3.7
  },
  {
    "id": "house-spirits",
    "title": "The House of the Spirits",
    "author": "Isabel Allende",
    "coverUrl": "/placeholder.svg",
    "synopsis": "A notable work by Isabel Allende.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "heartbroken",
      "betrayal"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2007,
    "communityRating": 4.5
  },
  {
    "id": "silmarillion",
    "title": "The Silmarillion",
    "author": "J.R.R. Tolkien",
    "coverUrl": "https://covers.openlibrary.org/b/id/14627042-L.jpg",
    "synopsis": "A notable work by J.R.R. Tolkien.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "furious",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1977,
    "communityRating": 4.4
  },
  {
    "id": "owen-meany",
    "title": "A Prayer for Owen Meany",
    "author": "John Irving",
    "coverUrl": "https://covers.openlibrary.org/b/id/5414972-L.jpg",
    "synopsis": "A notable work by John Irving.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "motivated",
      "tragic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1989,
    "communityRating": 4.9
  },
  {
    "id": "color-purple",
    "title": "The Color Purple",
    "author": "Alice Walker",
    "coverUrl": "https://covers.openlibrary.org/b/id/8564628-L.jpg",
    "synopsis": "A notable work by Alice Walker.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "adventurous",
      "angry"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1976,
    "communityRating": 4.6
  },
  {
    "id": "secret-garden",
    "title": "The Secret Garden",
    "author": "Frances Hodgson Burnett",
    "coverUrl": "https://covers.openlibrary.org/b/id/12622062-L.jpg",
    "synopsis": "A notable work by Frances Hodgson Burnett.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "dark",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1911,
    "communityRating": 4.2
  },
  {
    "id": "monte-cristo",
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "coverUrl": "https://covers.openlibrary.org/b/id/14564121-L.jpg",
    "synopsis": "A notable work by Alexandre Dumas.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "furious",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1888,
    "communityRating": 3.8
  },
  {
    "id": "anna-karenina",
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "coverUrl": "https://covers.openlibrary.org/b/id/2560652-L.jpg",
    "synopsis": "A notable work by Leo Tolstoy.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "curious",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1876,
    "communityRating": 4.2
  },
  {
    "id": "war-and-peace",
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "coverUrl": "https://covers.openlibrary.org/b/id/12621906-L.jpg",
    "synopsis": "A notable work by Leo Tolstoy.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "sad",
      "betrayal",
      "furious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1864,
    "communityRating": 4.1
  },
  {
    "id": "crime-and-punishment",
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "coverUrl": "https://covers.openlibrary.org/b/id/14911181-L.jpg",
    "synopsis": "A notable work by Fyodor Dostoevsky.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "curious",
      "mysterious",
      "furious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1866,
    "communityRating": 4
  },
  {
    "id": "the-idiot",
    "title": "The Idiot",
    "author": "Fyodor Dostoevsky",
    "coverUrl": "https://covers.openlibrary.org/b/id/12371520-L.jpg",
    "synopsis": "A notable work by Fyodor Dostoevsky.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "betrayal",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2017,
    "communityRating": 4.1
  },
  {
    "id": "moon-sixpence",
    "title": "The Moon and Sixpence",
    "author": "W. Somerset Maugham",
    "coverUrl": "https://covers.openlibrary.org/b/id/314604-L.jpg",
    "synopsis": "A notable work by W. Somerset Maugham.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "funny",
      "motivated"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1919,
    "communityRating": 4
  },
  {
    "id": "old-man-sea",
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "coverUrl": "https://covers.openlibrary.org/b/id/463307-L.jpg",
    "synopsis": "A notable work by Ernest Hemingway.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "motivated",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1952,
    "communityRating": 4.8
  },
  {
    "id": "a-thousand-splendid-suns",
    "title": "A Thousand Splendid Suns",
    "author": "Khaled Hosseini",
    "coverUrl": "https://covers.openlibrary.org/b/id/8579790-L.jpg",
    "synopsis": "A notable work by Khaled Hosseini.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "mysterious",
      "romantic",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2007,
    "communityRating": 3.8
  },
  {
    "id": "secret-history",
    "title": "The Secret History",
    "author": "Donna Tartt",
    "coverUrl": "https://covers.openlibrary.org/b/id/744854-L.jpg",
    "synopsis": "A notable work by Donna Tartt.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "tragic",
      "mysterious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1992,
    "communityRating": 4
  },
  {
    "id": "siddhartha",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "coverUrl": "https://covers.openlibrary.org/b/id/6562535-L.jpg",
    "synopsis": "A notable work by Hermann Hesse.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "wholesome",
      "nostalgic",
      "funny"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1922,
    "communityRating": 4.2
  },
  {
    "id": "stranger",
    "title": "The Stranger",
    "author": "Albert Camus",
    "coverUrl": "/placeholder.svg",
    "synopsis": "A notable work by Albert Camus.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "curious",
      "sad",
      "romantic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1980,
    "communityRating": 4.6
  },
  {
    "id": "persepolis",
    "title": "Persepolis",
    "author": "Marjane Satrapi",
    "coverUrl": "https://covers.openlibrary.org/b/id/12648921-L.jpg",
    "synopsis": "A notable work by Marjane Satrapi.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "motivated",
      "angry",
      "furious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2000,
    "communityRating": 4.6
  },
  {
    "id": "wind-up-bird",
    "title": "The Wind-Up Bird Chronicle",
    "author": "Haruki Murakami",
    "coverUrl": "https://covers.openlibrary.org/b/id/12976127-L.jpg",
    "synopsis": "A notable work by Haruki Murakami.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "dark",
      "romantic",
      "nostalgic"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1998,
    "communityRating": 3.7
  },
  {
    "id": "the-secret-history-2",
    "title": "The Secret Garden",
    "author": "Frances Hodgson Burnett",
    "coverUrl": "https://covers.openlibrary.org/b/id/12622062-L.jpg",
    "synopsis": "A notable work by Frances Hodgson Burnett.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "tragic",
      "angry",
      "dark"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1911,
    "communityRating": 3.7
  },
  {
    "id": "the-queen",
    "title": "The Queen of the Damned",
    "author": "Anne Rice",
    "coverUrl": "https://covers.openlibrary.org/b/id/9255774-L.jpg",
    "synopsis": "A notable work by Anne Rice.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "betrayal",
      "sad",
      "hopeful"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1988,
    "communityRating": 4.9
  },
  {
    "id": "the-alice",
    "title": "Alice’s Adventures in Wonderland",
    "author": "Lewis Carroll",
    "coverUrl": "https://covers.openlibrary.org/b/id/10527843-L.jpg",
    "synopsis": "A notable work by Lewis Carroll.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "heartbroken",
      "tragic",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1865,
    "communityRating": 4.6
  },
  {
    "id": "the-chronicles-2",
    "title": "Chronicle of a Death Foretold",
    "author": "Gabriel Garcia Marquez",
    "coverUrl": "https://covers.openlibrary.org/b/id/12198662-L.jpg",
    "synopsis": "A notable work by Gabriel Garcia Marquez.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "angry",
      "heartbroken",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1984,
    "communityRating": 4.7
  },
  {
    "id": "one-hundred-years",
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "coverUrl": "https://covers.openlibrary.org/b/id/15093420-L.jpg",
    "synopsis": "A notable work by Gabriel Garcia Marquez.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "romantic",
      "heartbroken",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 1967,
    "communityRating": 3.8
  },
  {
    "id": "love-in-time",
    "title": "Love in the Time of Cholera",
    "author": "Gabriel Garcia Marquez",
    "coverUrl": "/placeholder.svg",
    "synopsis": "A notable work by Gabriel Garcia Marquez.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "hopeful",
      "furious",
      "curious"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": null,
    "communityRating": 4.1
  },
  {
    "id": "the-idiot-2",
    "title": "Demons",
    "author": "Fyodor Dostoevsky",
    "coverUrl": "/placeholder.svg",
    "synopsis": "A notable work by Fyodor Dostoevsky.",
    "genres": [
      "fiction"
    ],
    "moods": [
      "nostalgic",
      "tragic",
      "sad"
    ],
    "hints": [
      "Look for surprising character turns.",
      "Pay attention to recurring motifs."
    ],
    "year": 2017,
    "communityRating": 3.7
  }
];

export const listings: Listing[] = [];
