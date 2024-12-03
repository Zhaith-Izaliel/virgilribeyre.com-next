{
  description = "My personal website, powered by Vue.js and Typescript.";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    flake-utils,
    nixpkgs,
    ...
  } @ inputs: let
    inherit (packageJson) version name;
    packageJson = builtins.fromJSON (builtins.readFile ./package.json);
  in
    flake-utils.lib.eachDefaultSystem (
      system:
        with import nixpkgs {inherit system;}; let
          nodejs-package = pkgs.nodejs_22;
        in rec {
          workspaceShell = pkgs.mkShell {
            # nativeBuildInputs is usually what you want -- tools you need to run
            nativeBuildInputs = [
              nodejs-package
            ];
          };

          devShells = {
            # nix develop
            "${system}".default = workspaceShell;
            default = workspaceShell;
          };
          packages = {
            default = pkgs.callPackage ./nix {inherit version name;};
            shell = devShells.default;
          };
        }
    );
}
