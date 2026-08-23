export const SKILL_COMBAT_PROFILES={
 reflexhammer:{damageType:'physical',damageSubtype:'blunt',tags:['melee','weapon']},
 diagblick:{damageType:'diagnostic',damageSubtype:'diagnostic',tags:['analysis','marking']},
 migraenebann:{damageType:null,damageSubtype:null,tags:['healing','support']},
 eeg:{damageType:'diagnostic',damageSubtype:'diagnostic',tags:['analysis','party_buff']},
 nervenblock:{damageType:'neuro',damageSubtype:'neuro_control',tags:['control','single_target']},
 therapieplan:{damageType:null,damageSubtype:null,tags:['healing','party_support']},
 diffdiagnose:{damageType:'diagnostic',damageSubtype:'diagnostic',tags:['analysis','aoe']},
 infusion:{damageType:null,damageSubtype:null,tags:['healing']},
 blutbild:{damageType:'diagnostic',damageSubtype:'diagnostic',tags:['analysis','debuff']},
 antibiotikum:{damageType:'pharmacologic',damageSubtype:'circulatory',tags:['healing','party_support']},
 ultraschall:{damageType:'diagnostic',damageSubtype:'diagnostic',tags:['analysis','debuff']},
 sanftehand:{damageType:null,damageSubtype:null,tags:['healing']},
 hormontherapie:{damageType:'pharmacologic',damageSubtype:'circulatory',tags:['party_buff']},
 intubation:{damageType:'physical',damageSubtype:'pierce',tags:['airway','single_target']},
 schmerzmittel:{damageType:'pharmacologic',damageSubtype:'sedation',tags:['party_buff']},
 vollnarkose:{damageType:'pharmacologic',damageSubtype:'sedation',tags:['control']},
 skalpell:{damageType:'physical',damageSubtype:'slash',tags:['melee','weapon']},
 fixateur:{damageType:'physical',damageSubtype:'blunt',tags:['support','trauma']},
 notoperation:{damageType:'physical',damageSubtype:'slash',tags:['healing','trauma']}
};

export const ENEMY_DAMAGE_AFFINITIES={
 fax_der_verdammnis:{blunt:1.4,pierce:.5,stress:.7},
 dokumentationspflicht:{blunt:.55,slash:.85,diagnostic:1.25,stress:1.2},
 bettensperre:{blunt:.8,slash:.7,pierce:.75,diagnostic:1.2},
 drucker_stau:{blunt:1.25,pierce:.6,electric:1.2},
 monitor_alarm:{electric:.55,blunt:1.15,diagnostic:1.2},
 perfusor_alarm:{pierce:.7,electric:1.15,diagnostic:1.15},
 leeres_sonogel:{blunt:1.3,slash:1.2,pierce:1.2},
 labor_ohne_kontext:{diagnostic:1.4,blunt:.8},
 google_vater:{stress:.7,confusion:.8,diagnostic:1.25},
 konsil_karussell:{diagnostic:1.3,stress:.8},
 elite_it_ausfall:{electric:.65,blunt:1.15,diagnostic:1.2},
 elite_hygiene:{physical:.8,diagnostic:1.2},
 status_epilepticus:{neuro_control:.55,electric:.8,diagnostic:1.25},
 boss_chefarztvisite:{stress:.6,confusion:.7,diagnostic:1.15},
 boss_systemausfall:{electric:.6,physical:1.1,diagnostic:1.25},
 boss_montagmorgen:{stress:.7,diagnostic:1.15},
 boss_massenanfall:{diagnostic:1.2,physical:1.05}
};

export function combatProfileFor(skillId){return SKILL_COMBAT_PROFILES[skillId]||{damageType:null,damageSubtype:null,tags:[]};}
export function affinityForEnemy(enemyId){return ENEMY_DAMAGE_AFFINITIES[enemyId]||{};}
