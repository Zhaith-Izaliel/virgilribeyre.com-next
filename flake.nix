{
  description = "My personal website, powered by Vue.js and Typescript.";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = inputs:
    with inputs;
      flake-utils.lib.eachDefaultSystem (
        system:
          with import nixpkgs {inherit system;}; let
            nodejs-package = pkgs.nodejs_21;
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
              default = pkgs.callPackage ./nix {};
              shell = devShells.default;
            };
          }
      );
}
