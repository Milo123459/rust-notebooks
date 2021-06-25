Object.assign(window.search, {"doc_urls":["INTRODUCTION.html#introduction","INTRODUCTION.html#rust-notebooks","ch01/00-getting-started.html#getting-started","ch01/01-installation.html#installation","ch01/02-terms.html#terms","ch01/03-initiate.html#initiate-a-project"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":35,"breadcrumbs":3,"title":2},"2":{"body":10,"breadcrumbs":4,"title":2},"3":{"body":36,"breadcrumbs":4,"title":1},"4":{"body":54,"breadcrumbs":4,"title":1},"5":{"body":80,"breadcrumbs":6,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"👋, Hey traveller! I see you have stopped off over here to learn Rust. Lets talk about some advantages to why you should: Performant Memory safety Type system Before you read on, this isn't a copy of the Rust Book. I wrote this as a more laid-back approach to learn Rust, and thinks that helped me out on my journey of becoming a Rustacean.","breadcrumbs":"Introduction » Rust notebooks","id":"1","title":"Rust notebooks"},"2":{"body":"This chapter goes over things like: How to initiate projects How to install Rust and other things in the ecosystem","breadcrumbs":"Getting Started » Getting Started","id":"2","title":"Getting Started"},"3":{"body":"This is the first step in becoming a Rustacean. Installing is easy, fast, and efficient! Firstly, lets go to rustup.rs - download and run the installer. Then, go to the terminal and type rustup toolchain add stable Congrats, rust is installed. See how easy that was? If you need to update, type: rustup update Seriously, I'm not joking, it is that easy!","breadcrumbs":"Getting Started » Installation » Installation","id":"3","title":"Installation"},"4":{"body":"Words that people use as Rustaceans, along with helpful declarations about what things are. rustacean - Someone whos programs in Rust. ferris - Mascot for the Rust programming language. Cargo.toml - Essentially a package.json for Rust projects, containing dependencies, metadata, etc. Cargo.lock - Basically a yarn.lock for Rust projects. Contains information for internal dependencies. crates.io - A place where dependencies live. Every (public) dependency gets published on crates. target - A directory containing built crates and the built source code of your project.","breadcrumbs":"Getting Started » The terms » Terms","id":"4","title":"Terms"},"5":{"body":"The first step is initiating a project, and it's very easy! Firstly, lets say you have already mae a directory for your project, for example: Ours for this is rust-notebooks, you CD into the directory, and run cargo init. This initiates a blank project. Lets say you want Cargo to make the directory for you. Simply type cargo new <poject-name>, so for us, this'd be cargo new rust-notebooks. Let's analyze what a freshly brewed project looks like. Cargo.lock\nCargo.toml\n.gitignore\ntarget/\nsrc/ main.rs If for some reason, .gitignore isn't created, just add target to the gitignore file. You don't want to commit the target directory, trust me! Now, lets talk about src/main.rs - the first few lines of our Rust project! fn main() { println!(\"Hello, world.\");\n}","breadcrumbs":"Getting Started » Initiate a project » Initiate a project","id":"5","title":"Initiate a project"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"d":{"d":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":1,"docs":{"5":{"tf":2.0}}}}}},"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"s":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.0}}}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"t":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"w":{"df":1,"docs":{"5":{"tf":1.0}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"i":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}}}}}}},"n":{"df":1,"docs":{"5":{"tf":1.0}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}}},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"y":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"'":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}},"i":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.7320508075688772}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"'":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"l":{"a":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"5":{"tf":1.0}}},"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":1,"docs":{"5":{"tf":1.0}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"a":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":5,"docs":{"1":{"tf":2.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":2.0},"5":{"tf":1.7320508075688772}},"u":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"c":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"'":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"y":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"a":{"d":{"d":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":1,"docs":{"5":{"tf":2.0}}}}}},"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"s":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.0}}}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"t":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"w":{"df":1,"docs":{"5":{"tf":1.0}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"i":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}}}}}}},"n":{"df":1,"docs":{"5":{"tf":1.0}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}}},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"y":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"'":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}},"i":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":2.23606797749979}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.449489742783178}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"'":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"l":{"a":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"5":{"tf":1.0}}},"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":1,"docs":{"5":{"tf":1.0}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"a":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.8284271247461903}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":5,"docs":{"1":{"tf":2.23606797749979},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":2.0},"5":{"tf":1.7320508075688772}},"u":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"c":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"'":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"y":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"title":{"root":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});