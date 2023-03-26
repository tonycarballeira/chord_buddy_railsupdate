class RenameProgressionsIdInOrderedChords < ActiveRecord::Migration[4.1]
  def change
  	rename_column :ordered_chords, :progessions_id, :progression_id
  end
end
