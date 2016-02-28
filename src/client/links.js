/*eslint camelcase: 0 */

const links = {
  abstract_data_type: ['data_type', 'implementation'],
  abstraction: ['notion', 'observer', 'empirical_evidence'],
  agent: ['entity', 'computation'],
  agile_software_development: ['software_development', 'pid_controller'],
  agriculture: ['civilization'],
  algebra: ['symbol', 'mathematics', 'structure'],
  algorithm: ['data', 'reason', 'cpu_operation', 'chomsky_hierarchy'],
  analog_signal: ['recording'],
  analysis: ['process', 'knowledge'],
  anchor: ['HTML', 'document'],
  animal: ['human', 'brain', 'organism'],
  animation: ['illusion', 'motion'],
  answer: ['reactivity', 'linguistics'],
  antireflexivity: ['binary_relation', 'set'],
  antisymmetry: ['binary_relation', 'set'],
  api: ['application', 'programming', 'interface', 'socket'],
  application: ['software', 'distributed_application', 'network_application', 'SOA'],
  application_layer: ['network_model', 'socket'],
  application_software: ['computer_game', 'web_browser', 'text_editor'],
  architecture: ['art', 'design', 'software_architecture'],
  arithmetic: ['number', 'programming', 'abstraction', 'operator', 'mathematics'],
  array: ['associative_array', 'linked_list', 'array_data_type', 'array_data_structure'],
  array_data_structure: ['tuple', 'matrix'],
  array_data_type: ['abstract_data_type'],
  art: ['beauty'],
  ascii: ['telecommunications', 'character'],
  associative_array: ['hashtable'],
  atom: ['physics'],
  atom_text_editor: ['github', 'open_source', 'git'],
  authentification: ['username', 'password', 'data_security'],
  authorization: ['public_access', 'private_access'],
  automation: ['control_system', 'pid_controller', 'process_automation'],
  axiom: ['philosophy', 'self_evidence'],
  axiom_of_choice: ['set_theory', 'mathematical_axiom', 'Cartesian_product'],
  AJAX: ['SPA', 'javascript', 'http', 'XML'],
  batch_program: ['io_operation', 'computer', 'interactive_program'],
  beauty: ['life'],
  belief: ['state', 'mind', 'empirical_evidence'],
  big_O_notation: ['computability'],
  binary_number: ['number', 'bit', 'positional_notation', 'ones\'_complement'],
  binary_relation: ['relation', 'set'],
  biology: ['life', 'function', 'structure'],
  bit: ['bitwise_operation'],
  bitcoin: ['p2p_network', 'cryptocurrency', 'open_source'],
  bitwise_operation: ['bit', 'operation', 'computation', 'arithmetic', 'full_adder'],
  brain: ['system', 'nerve', 'biology', 'animal'],
  bytecode: ['programming_language_implementation', 'ISA', 'virtual_machine'],
  Blockchain: ['bitcoin', 'database'],
  c_plus_plus: ['object_oriented_programming', 'system_programming', 'desktop_application'],
  c_pl: ['structure', 'programming', 'operating_system', 'unix', 'c_plus_plus'],
  category: ['morphism', 'category_theory'],
  category_theory: ['category', 'mathematics', 'theory', 'morphism'],
  change: ['state', 'function', 'time', 'mathematical_analysis'],
  character: ['information', 'symbol', 'graph', 'character_set'],
  character_set: ['encoding', 'ascii', 'unicode', 'punycode'],
  chinese_room: ['intuition_pump', 'strong_AI'],
  chomsky_hierarchy: ['algorithm', 'hierarchy', 'grammar', 'turing_machine', 'isomorphism'],
  class_oop: ['object_oriented_programming', 'inheritance_oop', 'polymorphism_oop', 'hierarchy'],
  client: ['server', 'p2p_network'],
  client_server_model: ['server', 'client', 'information_technology'],
  closed_loop_control_system: ['control_system', 'feedback_control_system', 'open_loop_control_system'],
  circuit: ['electronics', 'computer', 'electrical_components', 'integrated_circuit'],
  civilization: ['human', 'agriculture'],
  code: ['programmer', 'programming_language', 'syntax'],
  code_reusability: ['function', 'software_library'],
  codec: ['signal', 'stream'],
  coffee: ['programmer', 'software_bug', 'code'],
  cognition: ['brain', 'thought'],
  collection: ['set', 'quantity', 'data', 'operator', 'problem', 'representation'],
  combinational_logic: ['logic', 'sequential_logic'],
  command_line_interface: ['user_interface', 'computer'],
  communication: ['component', 'meaning', 'semiotics', 'information','system', 'sign'],
  communications_protocol: ['WWW', 'communication', 'SSL', 'http'],
  compiler: ['machine_code', 'execution', 'interpreter', 'symbol_table'],
  complexity: ['monolith', 'domain'],
  component: ['whole', 'computer', 'system'],
  composition: ['structure', 'component', 'function'],
  computability: ['computation', 'turing_machine', 'big_O_notation'],
  computation: ['algorithm', 'computability', 'conceptual_model', 'protocol'],
  computer: ['cpu', 'computer_memory', 'operating_system', 'software', 'device'],
  computer_architecture: ['pipeline'],
  computer_game: ['interactive_program', 'experience'],
  computer_memory: ['computer', 'RAM'],
  computer_network: ['computer', 'telecommunications', 'internet', 'network'],
  computer_program: ['batch_program', 'interactive_program', 'instruction', 'algorithm', 'programming'],
  computer_science: ['representation', 'information', 'process_automation', 'computation'],
  concept: ['abstraction', 'idea'],
  conceptual_model: ['composition', 'mental_model', 'representation', 'concept'],
  concurrent_computing: [ 'programming','sequence', 'time', 'threading', 'parallel', 'event_loop'],
  consciousness: ['quality', 'state'],
  constant: ['change', 'value'],
  constructed_language: ['grammar', 'vocabulary', 'communication', 'programming_language'],
  consumer_electronics: ['electrical_appliance'],
  content_management_system: ['tool', 'software'],
  context: ['expression', 'scope', 'state', 'text'],
  control_flow: ['switch', 'stream'],
  control_loop: ['control_system'],
  control_unit: ['cpu_operation', 'sequential_logic'],
  control_system: ['device', 'open_loop_control_system', 'closed_loop_control_system'],
  convention: ['society', 'communication'],
  cpu: ['arithmetic', 'logic', 'cpu_operation', 'circuit', 'io_operation'],
  cpu_operation: ['cpu', 'control_unit', 'ISA', 'control_flow', 'instruction', 'bitwise_operation'],
  cryptocurrency: ['digital_currency', 'Blockchain', 'cryptography', 'decentralization'],
  cryptography: ['md5', 'cypher', 'hash_function', 'cryptographic_protocol'],
  cryptographic_protocol: ['SSL', 'TSL'],
  culture: ['knowledge', 'art', 'belief', 'ethics'],
  cypher: ['algorithm', 'cryptography'],
  Cartesian_product: ['axiom_of_choice'],
  CGI: ['filmmaking'],
  CSS: ['HTML'],
  data: ['illustration', 'variable', 'set', 'value', 'graph', 'data_structure'],
  database: ['data', 'SQL', 'NoSQL', 'RDBMS'],
  data_definition: ['program_design'],
  data_integrity: ['md5', 'immutability'],
  data_security: ['authentification', 'authorization','cryptography'],
  data_structure: ['data', 'linked_list', 'abstract_data_type', 'array'],
  data_type: ['abstract_data_type', 'programming_language'],
  deadlock: ['dining_philosophers'],
  decentralization: ['cybernetics'],
  declarative_paradigm: ['programming_paradigm', 'functional_programming', 'SQL', 'reg_ex'],
  derivation: ['mathematical_analysis', 'integral'],
  design: ['convention', 'architecture', 'circuit'],
  desktop_application: ['c_plus_plus'],
  device: ['tool', 'computer'],
  digital_currency: ['cryptocurrency'],
  digital_recording: ['recording'],
  dining_philosophers: ['concurrent_computing', 'intuition_pump'],
  direct_style: ['continuation', 'sequential_programming'],
  distributed_application: ['application', 'distributed_system', 'p2p_network'],
  distributed_system: ['system', 'distributed_application'],
  document: ['api', 'web_browser', 'DOM'],
  domain: ['complexity', 'domain_model', 'examples_domain'],
  domain_model: ['domain', 'domain_examples', 'conceptual_model'],
  domain_examples: ['domain_model'],
  dynamic_type_checking: ['prototype_oop', 'static_type_checking'],
  DOM: ['HTML', 'api', 'javascript'],
  electric_current: ['electricity'],
  electrical_appliance: ['electrical_load', 'small_appliance', 'major_appliance', 'consumer_electronics'],
  electrical_components: ['electronics', 'electrical_load', 'electrical_connector'],
  electrical_connector: ['electrical_components'],
  electrical_load: ['electrical_components', 'electrical_appliance', 'impedance'],
  electricity: ['relay', 'electric_current', 'electromagnetic_radiation'],
  electromagnetic_radiation: ['electricity'],
  electromagnetism: ['physics', 'electron'],
  electron: ['atom', 'electronics', 'electromagnetism'],
  electronics: ['device', 'circuit', 'transistor', 'electron'],
  emotion: ['sentience', 'emotions_wheel'],
  emotions_wheel: ['emotion', 'theory'],
  empirical_evidence: ['observer', 'science'],
  entity: ['reflexivity', 'antireflexivity'],
  encoding: ['code', 'cryptography', 'cipher'],
  energy: ['form', 'physics', 'E=m*c2', 'transducer'],
  epistemology: ['self_evidence', 'knowledge'],
  ethics: ['philosophy'],
  event_handler: ['interactive_program'],
  event_loop: ['web_browser', 'node_js', 'event'],
  event: ['interactive_program'],
  examples_domain: ['domain', 'control_system', 'sensors'],
  examples_pl: ['programming_language', 'c_pl', 'javascript'],
  examples_sensors: ['sensors', 'thermocouple'],
  execution: ['computer_program', 'instruction'],
  experience: ['subject', 'computer_game'],
  expression: ['value', 'variable', 'constant', 'operator', 'function'],
  'E=m*c^2': ['energy', 'matter', 'light'],
  feedback_control_system: ['closed_loop_control_system'],
  file: ['data', 'paper', 'information_system'],
  file_system: ['file', 'data', 'unix_filesystem'],
  film: ['photography', 'animation', 'filmmaking'],
  filmmaking: ['recording', 'CGI'],
  filter: ['stream', 'cpu'],
  firstclass_function: ['value', 'function', 'programming'],
  force: ['impulse', 'three_Newton_laws'],
  form: ['shape'],
  formal_system: ['formal_system_structure', 'geometry', 'set_theory'],
  formal_system_structure: ['grammar', 'inference', 'axiom'],
  full_adder: ['bitwise_operation', 'logic_gate', 'half_adder'],
  function: ['value', 'functional_programming', 'imperative_programming'],
  functional_programming: ['function', 'programming_paradigm', 'imperative_programming', 'referential_transparency'],
  game_engine: ['computer_game', 'video_game_development'],
  geometry: ['mathematics', 'shape', 'space', 'visualization'],
  git: ['semver', 'command_line_interface', 'linux'],
  github: ['git', 'atom_text_editor', 'markdown'],
  goal: ['agent', 'set', 'state', 'system', 'tool'],
  grammar: ['language', 'axiom', 'chomsky_hierarchy'],
  graph: ['visualization', 'information', 'graph_theory'],
  graph_theory: ['mathematics', 'discrete_mathematics', 'graph'],
  graphical_user_interface: ['user_interface', 'icon'],
  GSM: ['telecommunications', 'network', 'wireless_communication'],
  half_adder: ['full_adder'],
  hardware: ['collection', 'computer', 'system', 'software'],
  hashtable: ['data_structure'],
  hash_function: ['function'],
  hierarchy: ['category', 'pyramid'],
  high_level_language: ['translator'],
  http: ['WWW', 'communications_protocol', 'http_request', 'http_response'],
  http_request: ['server', 'client'],
  http_response: ['server', 'client'],
  human: ['tool', 'brain', 'society', 'philosophy'],
  hyperlink: ['HTML', 'document', 'anchor'],
  HTML: ['semantics', 'markup_language', 'anchor', 'CSS'],
  icon: ['graphical_user_interface'],
  idea: ['mental_model', 'image', 'abstraction'],
  identification: ['process'],
  illusion: ['animation'],
  illustration: ['subject', 'representation', 'graph'],
  image: ['graphics', 'object', 'data_encoding'],
  immutability: ['constant', 'data_structure'],
  impedance: ['electrical_load'],
  imperative_programming: ['declarative_paradigm', 'programming_language_implementation'],
  implementation: ['application', 'design', 'execution', 'idea', 'standard'],
  impulse: ['nerve', 'momentum', 'integral', 'force'],
  inference: ['logic', 'axiom', 'process'],
  informatics: ['logic', 'computer_science', 'theory_of_information'],
  information: ['data', 'observer', 'question', 'visualization', 'WWW'],
  information_system: ['information', 'system', 'communication'],
  information_technology: ['client_server_model', 'computer', 'computer_network', 'TV_set', 'telephone'],
  inheritance_oop: ['object_oriented_programming'],
  instruction: ['cpu', 'programming', 'computer', 'machine_code'],
  integral: ['impulse', 'mathematical_analysis', 'derivation', 'function'],
  integrated_circuit: ['circuit', 'transistor', 'logic_gate'],
  intelligence: ['learning', 'cognition', 'reason'],
  interprocess_communication: ['signal', 'unix_filesystem'],
  interactive_program: ['event', 'event_handler', 'computer_program'],
  interface: ['system', 'hardware', 'software', 'computer', 'user_interface'],
  internet: ['tcp_ip', 'computer_network', 'WWW', 'http', 'p2p_network'],
  internet_protocol: ['tcp_ip', 'http', 'WebSocket'],
  interpreter: ['execution', 'compiler', 'linker', 'machine_code', 'symbol_table'],
  intuition_pump: ['dining_philosophers', 'chinese_room', 'ship_of_theseus', 'philosophy'],
  io_operation: ['computer_science','stream', 'software', 'function'],
  isomorphism: ['morphism', 'chomsky_hierarchy'],
  iteration: ['process', 'goal'],
  IDE: ['text_editor', 'process_automation', 'programming'],
  ISA: ['cpu_operation', 'bytecode', 'io_operation'],
  javascript: ['io_operation', 'web_browser', 'HTML', 'node_js', 'DOM', 'AJAX'],
  JSON: ['data_encoding', 'javascript', ],
  knowledge: ['information', 'observer', 'mindmap', 'paradigm', 'epistemology'],
  language: ['ability', 'human', 'system', 'communication'],
  learning: ['brain', 'io_operation', 'programming'],
  life: ['energy'],
  linguistics: ['science', 'context', 'meaning', 'form'],
  linked_list: ['sequence', 'computer_science', 'pointer'],
  linker: ['interpreter'],
  linux: ['open_source', 'unix', 'posix', 'operating_system'],
  logic: ['philosophy', 'reason', 'mathematical_logic', 'informatics', 'science'],
  logic_gate: ['transistor', 'integrated_circuit', 'relay'],
  logical_implication: ['mathematical_axiom'],
  machine_code: ['instruction', 'execution', 'computer', 'object_code'],
  major_appliance: ['electrical_appliance'],
  making_examples: ['program_design', 'testing', 'domain'],
  markdown: ['github'],
  markup_language: ['HTML', 'XML'],
  mathematical_analysis: ['change', 'integral', 'derivation', 'mathematics'],
  mathematical_axiom: ['mathematics', 'axiom_of_choice', 'logical_implication', 'mathematical_proof'],
  mathematical_logic: ['set_theory', 'logic'],
  mathematical_proof: ['mathematical_axiom'],
  mathematics: ['arithmetic', 'quantity', 'change', 'geometry', 'algebra', 'mathematical_analysis', 'knowledge'],
  matrix: ['array', 'symbol', 'expression'],
  matter: ['physics'],
  md5: ['hash_function', 'data_integrity'],
  meaning: ['communication', 'context', 'logic'],
  memory: ['process', 'consciousness', 'encoding'],
  mental_model: ['thought', 'idea'],
  microservices: ['software_architecture'],
  mind: ['consciousness', 'human', 'set'],
  mindmap: ['knowledge', 'visualization', 'graph', 'human'],
  momentum: ['force'],
  monolith: ['software_architecture', 'complexity'],
  morphism: ['mathematics', 'structure', 'concrete_category'],
  motion: ['three_Newton_laws', 'space', 'time'],
  nature: ['physics'],
  nerve: ['brain', 'impulse'],
  network: ['system', 'computer_network', 'social_network', 'structure'],
  network_application: ['remote_access', 'application', 'network'],
  network_model: ['conceptual_model', 'computer_network'],
  node_js: ['javascript', 'web_server', 'npm', 'SSL', 'tcp_ip', 'V8', 'event_loop'],
  notation: ['character', 'convention'],
  notion: ['structure', 'mind', 'relation', 'variable', 'scope'],
  npm: ['package_manager', 'node_js', 'JSON'],
  number: ['computation', 'mathematics', 'binary_number'],
  observer: ['information', 'reality', 'science', 'empirical_evidence'],
  object: ['entity', 'property', 'data_structure', 'procedure'],
  object_oriented_programming: ['programming_paradigm', 'class_oop', 'prototype_oop', 'object_composition'],
  object_composition: ['object_oriented_programming', 'linked_list'],
  'ones\'_complement': ['binary_number', 'two\'s_complement'],
  open_loop_control_system: ['control_system', 'closed_loop_control_system'],
  open_source: ['vim', 'bitcoin', 'linux', 'atom_text_editor'],
  operating_system: ['computer', 'hardware', 'file_system', 'network', 'unix', 'linux', 'windows_os'],
  operator: ['function', 'mathematics', 'computer'],
  organism: ['life'],
  overflow: ['two\'s_complement'],
  package_manager: ['software', 'software_library', 'software_installation'],
  p2p_network: ['computer_network', 'client', 'server'],
  paradigm: ['knowledge', 'programming_paradigm'],
  parallel: ['sequence', 'concurrent_computing', 'deadlock'],
  partial_order: ['transitivity', 'reflexivity', 'antisymmetry'],
  password: ['username', 'data_security'],
  pattern: ['iteration', 'design'],
  philosophy: ['reality', 'ethics', 'religion'],
  photography: ['film'],
  physics: ['nature', 'analysis', 'matter', 'energy'],
  pid_controller: ['automation', 'closed_loop_control_system'],
  pipeline: ['stream', 'computer_architecture', 'unix_philosophy'],
  pointer: ['linked_list'],
  polymorphism_oop: ['class_oop', 'prototype_oop'],
  positional_notation: ['binary_number', 'zero'],
  private_access: ['authorization'],
  problem: ['situation'],
  procedure: ['code_reusability', 'design_pattern', 'program_design'],
  process: ['operating_system', 'concurrent_computing'],
  process_automation: ['control_system', 'computer_science', 'IDE'],
  program_design: ['structure', 'data_definition', 'testing', 'making_examples'],
  programmer: ['code', 'coffee', 'programming'],
  programming: ['execution', 'computer_program', 'IDE', 'programmer', 'computation'],
  programming_language: ['constructed_language', 'computer', 'examples_pl'],
  programming_language_implementation: ['compiler', 'interpreter', 'translator', 'bytecode'],
  programming_paradigm: ['paradigm', 'structured_programming', 'declarative_paradigm'],
  property: ['component', 'entity'],
  protocol: ['communication', 'computation'],
  prototype_oop: ['object_oriented_programming', 'polymorphism_oop', 'dynamic_type_checking'],
  public_access: ['authorization'],
  punycode: ['ascii', 'unicode'],
  pyramid: ['hierarchy'],
  quality: ['property', 'convention', 'standard'],
  quantity: ['property', 'mathematics', 'number', 'arithmetic'],
  question: ['answer', 'linguistics', 'information'],
  radio: ['wireless_communication', 'electromagnetism'],
  radix: ['two\'s_complement'],
  reality: ['human', 'observer', 'philosophy'],
  reason: ['consciousness', 'logic', 'intelligence'],
  reactivity: ['answer'],
  recording: ['digital_recording', 'analog_signal'],
  recursion: ['computability'],
  referential_transparency: ['functional_programming'],
  reflexivity: ['antireflexivity', 'relation', 'notation'],
  reg_ex: ['declarative_paradigm'],
  relation: ['function', 'theory', 'mathematics', 'code_reusability'],
  relationship: ['relation', 'set'],
  relay: ['logic_gate', 'electricity', 'switch'],
  religion: ['philosophy'],
  remote_access: ['network_application', 'SSL','virtual_private_network'],
  replaceable_parts: ['standard'],
  representation: ['relationship', 'collection', 'computer_science'],
  RAM: ['computer_memory'],
  science: ['reality', 'empirical_evidence', 'knowledge', 'logic'],
  scope: ['notion', 'context'],
  self_evidence: ['axiom', 'epistemology'],
  semantics: ['meaning', 'semiotics', 'HTML'],
  semiotics: ['communication', 'sign'],
  semver: ['convention', 'software'],
  sensors: ['transducer', 'examples_domain', 'examples_sensors'],
  sentience: ['emotion', 'consciousness'],
  sequence: ['binary_relation', 'reflexivity', 'antisymmetry', 'transitivity', 'sequential_programming'],
  sequential_logic: ['logic', 'combinational_logic'],
  sequential_programming: ['sequence', 'parallel', 'concurrent_computing', 'direct_style'],
  server: ['web_server', 'client', 'p2p_network', 'client_server_model'],
  set: ['object', 'function', 'collection', 'set_theory'],
  set_theory: ['formal_system', 'mathematics', 'theory', 'mathematical_logic', 'axiom_of_choice'],
  shape: ['form'],
  ship_of_theseus: ['intuition_pump', 'structure'],
  side_effect: ['function', 'software_bug'],
  sign: ['meaning', 'interpreter', 'codec'],
  signal: ['interprocess_communication', 'unix'],
  situation: ['state', 'entity'],
  small_appliance: ['electrical_appliance'],
  social_network: ['structure', 'actor'],
  society: ['human', 'culture', 'civilization'],
  socket: ['application_layer', 'transportation_layer', 'api'],
  software: ['computer_program', 'cpu', 'cpu_operation', 'software_library'],
  software_architecture: ['microservices', 'monolith', 'software_development'],
  software_bug: ['side_effect'],
  software_development: ['software', 'agile_software_development', 'software_architecture'],
  software_framework: ['software_development', 'software_library'],
  software_library: ['programmer', 'compiler', 'software', 'software_framework'],
  software_platform: ['software', 'object code', 'computer_architecture'],
  space: ['geometry'],
  standard: ['convention', 'replaceable_parts'],
  state: ['computer_program', 'information', 'situation'],
  static_type_checking: ['dynamic_type_checking', 'type_system'],
  stream: ['sequence', 'data', 'batch_program', 'filter'],
  strong_AI: ['chinese_room'],
  structure: ['notion', 'pattern', 'hierarchy', 'network', 'ship_of_theseus'],
  structured_programming: ['programming_paradigm', 'object_oriented_programming', 'imperative_programming'],
  subject: ['philosophy', 'language', 'experience', 'consciousness'],
  symbol: ['representation', 'object', 'illustration', 'idea', 'belief'],
  syntax: ['grammar', 'vocabulary', 'language', 'meaning'],
  system: ['component', 'file_system', 'distributed_system', 'network', 'structure'],
  system_programming: ['software_platform', 'operating_system', 'game_engine'],
  switch: ['control_flow'],
  SOA: ['application'],
  SPA: ['AJAX'],
  SQL: ['database', 'programming_language'],
  SSL: ['TLS', 'data_security', 'cryptographic_protocol', 'remote_access'],
  tcp_ip: ['internet', 'communications_protocol', 'TLS', 'WebSocket', 'UDP'],
  telecommunications: ['radio', 'GSM', 'computer_network'],
  telephone: ['information_technology', 'telecommunications'],
  television: ['TV_set', 'television_program'],
  television_program: ['film'],
  testing: ['program_design', 'making_examples'],
  text: ['punycode', 'ascii', 'unicode'],
  text_editor: ['vim', 'atom_text_editor', 'computer_program'],
  text_user_interface: ['graphical_user_interface', 'command_line_interface'],
  threading: ['process', 'concurrent_computing'],
  three_Newton_laws: ['motion', '1st_Newton_law', '2nd_Newton_law', '3rd_Newton_law'],
  theory: ['reason', 'science', 'abstraction'],
  theory_of_information: ['informatics', 'computer_science'],
  thermocouple: ['examples_sensors'],
  thought: ['idea', 'human', 'brain'],
  time: ['change', 'universe', 'past', 'future', 'concurrent_computing'],
  tool: ['goal', 'human', 'device', 'IDE'],
  transducer: ['energy'],
  transistor: ['circuit', 'electronics', 'logic_gate'],
  transitivity: ['partial_order', 'relation', 'mathematics'],
  translator: ['programming_language_implementation', 'high_level_language'],
  transportation_layer: ['network_model', 'socket'],
  turing_machine: ['chomsky_hierarchy', 'computability'],
  tuple: ['number', 'set', 'partial_order'],
  'two\'s_complement': ['ones\'_complement', 'radix', 'overflow'],
  TLS: ['SSL', 'cryptographic_protocol', 'data_security'],
  TV_set: ['television', 'device'],
  type_system: ['programming_paradigm'],
  unicode: ['character_set', 'text', 'encoding', 'standard'],
  universe: ['collection', 'entity'],
  unix: ['unix_philosophy', 'unix_shell'],
  unix_filesystem: ['pipeline', 'interprocess_communication'],
  unix_philosophy: ['unix_shell', 'unix_filesystem', 'philosophy'],
  unix_shell: ['user_interface', 'command_line_interface', 'programming_language', 'file_system', 'unix'],
  user_interface: ['command_line_interface', 'graphical_user_interface'],
  username: ['password', 'data_security'],
  UDP: ['tcp_ip', 'communications_protocol'],
  URI: ['text', 'identification'],
  value: ['expression', 'firstclass_function'],
  variable: ['algebra', 'information', 'structure','value'],
  video_game_development: ['computer_game'],
  vim: ['text_user_interface', 'open_source'],
  virtual_machine: ['bytecode', 'computer'],
  virtual_private_network: ['remote_access'],
  visualization: ['communication', 'image', 'illustration', 'idea', 'mindmap','thought'],
  vocabulary: ['word', 'set', 'language'],
  web_browser: ['software', 'WWW', 'DOM', 'web_server', 'AJAX', 'event_loop'],
  web_server: ['server', 'web_browser', 'http_request', 'http_response'],
  whole: ['communication', 'interface', 'component'],
  windows_os: ['software', 'operating_system', 'unix'],
  wireless_communication: ['information', 'electromagnetism', 'radio'],
  word: ['property', 'meaning', 'symbol'],
  WebSocket: ['communications_protocol', 'tcp_ip'],
  WWW: ['URI', 'hyperlink', 'internet', 'http', 'AJAX'],
  XML: ['AJAX', 'markup_language'],
  zero: ['positional_notation']
};

export default links;
